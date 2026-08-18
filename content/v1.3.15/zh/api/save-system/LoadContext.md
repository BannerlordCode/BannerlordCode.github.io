---
title: "LoadContext"
description: "加载阶段的总编排器：在 SaveManager.Load 内部构造，持有全局 DefinitionContext 与 ISaveDriver，按「读头→建对象/容器→读字符串→解析引用→填成员→运行初始化回调」的阶段把 GameData 还原成完整对象图。"
---

# LoadContext

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class LoadContext`
**源文件：** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/LoadContext.cs`

## 概述

`LoadContext` 是存档加载阶段的总编排器，与保存侧的 [SaveContext](../SaveContext) 一一对应。它由 [SaveManager](../SaveManager) 在 `Load` 内部构造，接收全局 [DefinitionContext](../DefinitionContext)（用于把存档里的 `SaveId` 映射回 `TypeDefinition`）和 [ISaveDriver](../ISaveDriver)（用于取得字节），然后以 `Load(LoadData, bool)` 为入口，分多个阶段把一份 [GameData](../GameData) 反序列化成完整的对象图，并把 `Id == 0` 的对象设为 `RootObject`（通常是 `Game` / `Campaign`）。

## 心智模型

把 `LoadContext` 想成「读档施工队长」：它手里拿着两张图纸——[DefinitionContext](../DefinitionContext)（编号↔类型）和 [GameData](../GameData)（四段字节），按严格顺序把碎字节重新拼成活的游戏世界。第一步 `Load` 读 `Header` 拿到对象/字符串/容器的计数，并用 `ObjectHeaderLoadData` / `ContainerHeaderLoadData` 并行建好头（含类型与 id）；第二步用 `ObjectHeaderLoadData.CreateObject()` 把每个对象真正 `new` 出来（id 为 0 的即 `RootObject`），容器也先建出空壳；第三步 `LoadString` 把字符串池填进 `_strings`；第四步 `ResolveObject` / `AdvancedResolveObject` 把对象间的引用按编号接上（需要高级解析的类型才走 `AdvancedResolve`）；第五步 `CreateLoadData` 为每个对象填充字段/属性（`ObjectLoadData` 读取其字节段）；第六步填充容器数据；最后除非 `loadAsLateInitialize`，否则 `CreateLoadCallbackInitializator(loadData).InitializeObjects()` 运行初始化与 late 初始化回调。整个过程被若干 `GC.Collect()` 与 `PerformanceTestBlock` 切分——所以「字段在构造函数里未必完整、依赖其它对象的状态要放到加载回调或 `OnGameLoaded`」正是这套分阶段模型的直接后果。

## 何时使用 / 何时不要使用

**理解层面使用：** 当你排查「读档卡在引用解析」「自定义字段加载后是默认值」「late 初始化回调里对象还没齐」等问题，或想理解 `LoadContext` 各阶段的先后与 `LoadCallbackInitializator` 的时机时。

**不要使用：**

- 不要在模组运行时 `new LoadContext(...)`——它依赖已填充的全局 [DefinitionContext](../DefinitionContext) 和由 `SaveManager` 准备好的 [LoadData](../LoadData)，只能由引擎在 `Load` 内构造。
- 不要在保存阶段找 `LoadContext`——保存走的是 [SaveContext](../SaveContext)，两者互不通。
- 不要在对象构造函数或过早事件里假设引用已解析完——`ResolveObject` / `CreateLoadData` 是分阶段、且对象之间并行执行的。

## 依赖图

- 上游驱动：[SaveManager](../SaveManager) 在 `Load` 内 `new LoadContext(_definitionContext, driver)`，把读出的字节包成 [LoadData](../LoadData) 后调用 `context.Load(...)`，成功返回 `LoadResult](../LoadResult)`。
- 类型映射：构造注入的 [DefinitionContext](../DefinitionContext) 供各 `ObjectHeaderLoadData` 通过 `TryGetTypeDefinition` 把 `SaveId` 还原成 `TypeDefinition`。
- 字节来源：[GameData](../GameData)（即 `loadData.GameData`）提供 `Header` / `Strings` / `ObjectData` / `ContainerData` 四段；[ISaveDriver](../ISaveDriver) 负责把 `.sav` 读成字节。
- 阶段协作者：[ObjectHeaderLoadData](../ObjectHeaderLoadData) 建对象与解析引用，[ContainerHeaderLoadData](../ContainerHeaderLoadData) 建容器壳，[ArchiveDeserializer](../ArchiveDeserializer) 把字节段还原成 `SaveEntryFolder` 树。
- 回调编排：`CreateLoadCallbackInitializator` 产出 [LoadCallbackInitializator](../LoadCallbackInitializator)，在填充完成后跑 `InitializeObjects` / `AfterInitializeObjects`。
- 元信息：[MetaData](../MetaData) 随 [LoadData](../LoadData) 传入，供高级解析与版本判断使用。

## 风险

- **阶段顺序不可颠倒。** `Load` 内部先建对象壳、再解析引用、再填字段/属性、最后跑初始化回调；在对象构造函数里访问别的未填充对象会得到默认值或空引用。修复跨对象依赖要放进 late 初始化回调或 `CampaignBehaviorBase.OnGameLoaded`。
- **`RootObject` 仅在 id==0 时赋值。** 若存档根不是 id 0，`RootObject` 保持 `null`，依赖它的代码会失败；通常引擎保证存档根为 0 号对象。
- **异常被吞成 `false`。** `Load` 整体包在 `try/catch` 中，任何阶段抛异常都只 `Debug.Print(ex.Message)` 并返回 `false`，不会向上冒泡；排查加载失败要看日志，不能只靠返回值。
- **`EnableLoadStatistics` 恒为 `false`。** 源码中该静态属性写死 `false`，统计分支不会执行；不要依赖统计输出做逻辑。
- **`TryConvertType` 仅覆盖数值/字符串。** 它只处理数值互转、数值转字符串，以及 `List<>`↔`MBList<>` 的占位判断（实际不转换容器），对复杂类型返回 `false`——自定义类型迁移仍要靠 [IConflictResolver](../IConflictResolver)。

## 成员说明

### 构造与公开状态

- `LoadContext(DefinitionContext definitionContext, ISaveDriver driver)`：唯一的构造函数，由 `SaveManager` 调用，注入全局定义上下文与驱动；同时把头/容器/字符串数组置 `null`。
- `object RootObject { get; }`：反序列化后的存档根对象。仅在 `Load` 的「创建对象」阶段，当某个 `ObjectHeaderLoadData.Id == 0` 时赋值；通常是 `Game` / `Campaign`。
- `DefinitionContext DefinitionContext { get; }`：构造注入的全局定义上下文，供加载全程按 `SaveId` 查 `TypeDefinition`。
- `ISaveDriver Driver { get; }`：构造注入的驱动，提供 `.sav` 字节读取。
- `static bool EnableLoadStatistics { get; }`：恒为 `false` 的统计开关，源码写死。

### 核心编排

- `bool Load(LoadData loadData, bool loadAsLateInitialize)`：加载主入口。分阶段执行：读 `Header` 计数→并行建对象/容器头→`CreateObject` 并设 `RootObject`→`GC.Collect`→`LoadString` 填字符串池→`ResolveObject` / `AdvancedResolveObject` 接引用→`GC.Collect`→`CreateLoadData` 填对象字段/属性→填容器数据→`GC.Collect`→（非 late 初始化时）`CreateLoadCallbackInitializator(loadData).InitializeObjects()` + `AfterInitializeObjects()`。成功返回 `true`，异常返回 `false`。`loadAsLateInitialize == true` 时跳过初始化回调（由后续阶段补跑）。
- `LoadCallbackInitializator CreateLoadCallbackInitializator(LoadData loadData)`：`internal`，用对象头数组与计数构造回调编排器，交给 `Load` 在末尾跑初始化。

### 内部读取

- `static ObjectLoadData CreateLoadData(LoadData loadData, int i, ObjectHeaderLoadData header)`：`internal`，用 `ArchiveDeserializer` 读 `loadData.GameData.ObjectData[i]`，建 `ObjectLoadData` 并依次 `InitializeReaders` / `FillCreatedObject` / `Read` / `FillObject`，返回承载该对象全部成员数据的加载数据。
- `static string LoadString(ArchiveDeserializer saveArchive, int id)`：从字符串段按 `FolderId(-1, Strings)` / `EntryId(id, Txt)` 读出第 `id` 个字符串。

### 按编号取回

- `ObjectHeaderLoadData GetObjectWithId(int id)`：返回第 `id` 个对象头（`id == -1` 返回 `null`）。加载期对象之间的引用就是靠这个编号表接上的。
- `ContainerHeaderLoadData GetContainerWithId(int id)`：返回第 `id` 个容器头（`id == -1` 为 `null`）。
- `string GetStringWithId(int id)`：返回第 `id` 个字符串（`id == -1` 为 `null`）。

### 类型转换

- `static bool TryConvertType(Type sourceType, Type targetType, ref object data)`：在加载回填时尝试做数值↔数值、`数值→字符串` 的兼容转换；列表/字典等容器分支仅做类型判断、不真正转换，返回 `false`。用于旧档字段类型微调的兜底。

## 示例

模组侧触发读档的真实入口是 `SaveManager.Load`；引擎内部会 `new LoadContext(definitionContext, driver)` 并把读出的字节包成 `LoadData`，再调用 `context.Load(loadData, loadAsLateInitialize)`：

```csharp
// 模组触发读档：引擎在其内部构造 LoadContext 并跑完所有加载阶段。
LoadResult result = SaveManager.Load(loadName, metaData, out var error);
Game game = Game.Current;
Campaign campaign = Campaign.Current;

// LoadContext 在 Load() 内把 Id == 0 的对象设为 RootObject；
// 字段/属性填充完毕后，引擎运行加载回调，此时 Campaign 已可用：
var behavior = Campaign.Current.GetCampaignBehavior<IMySaveBehavior>();
```

`Load()` 内部的阶段顺序直接决定了「何时能安全访问被引用的对象」——下面的顺序正是源码里的真实切分（已简化）：

```csharp
// 1) 建对象壳，id==0 的对象成为 RootObject
foreach (var header in _objectHeaderLoadDatas) {
    header.CreateObject();
    if (header.Id == 0) RootObject = header.Target;
}
// 2) 接引用（需要高级解析的类型才走 AdvancedResolveObject）
foreach (var header in _objectHeaderLoadDatas)
    if (header.TypeDefinition.CheckIfRequiresAdvancedResolving(header.LoadedObject))
        header.AdvancedResolveObject(loadData.MetaData, CreateLoadData(loadData, header.Id, header));
    else
        header.ResolveObject();
// 3) 填充字段/属性，最后跑初始化回调
var init = CreateLoadCallbackInitializator(loadData);
init.InitializeObjects();
init.AfterInitializeObjects();
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveManager](../SaveManager) · [SaveContext](../SaveContext) · [DefinitionContext](../DefinitionContext) · [GameData](../GameData) · [LoadData](../LoadData) · [LoadResult](../LoadResult) · [ObjectHeaderLoadData](../ObjectHeaderLoadData) · [LoadCallbackInitializator](../LoadCallbackInitializator) · [MetaData](../MetaData)
