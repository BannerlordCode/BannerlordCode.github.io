---
title: "存档对象图 — SaveableTypeDefiner / SaveContext / LoadContext / DefinitionContext"
description: "Bannerlord 存档系统的对象图序列化架构：SaveManager 如何遍历游戏对象树并写入二进制流。"
---

# 存档对象图

**Namespace:** `TaleWorlds.SaveSystem` · `TaleWorlds.SaveSystem.Definition` · `TaleWorlds.SaveSystem.Save` · `TaleWorlds.SaveSystem.Load`  
**Module:** `TaleWorlds.SaveSystem` · `TaleWorlds.CampaignSystem`  
**Type:** 架构主题页 — 跨 `SaveManager` / `DefinitionContext` / `SaveableTypeDefiner` / `SaveContext` / `LoadContext`  
**源文件：** `TaleWorlds.SaveSystem/SaveManager.cs` · `TaleWorlds.SaveSystem/Definition/DefinitionContext.cs` · `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs` · `TaleWorlds.SaveSystem/Save/SaveContext.cs` · `TaleWorlds.SaveSystem/Load/LoadContext.cs` · `TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs`  
**行号口径：** 本页所有 `X.cs:N` 均指 **v1.3.15** 源码树（`bannerlord-1.3.15/`）。

> 节 schema：本页采用规范七节（概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航）。

## 概述

Bannerlord 的存档系统基于**对象图序列化**模型。`SaveManager` 是整个存档流程的入口，它从打了 `[SaveableRootClass]`（`SaveableRootClassAttribute.cs:7`）的根对象出发，沿着打了 `[SaveableField]`/`[SaveableProperty]`（`SaveableFieldAttribute.cs:7`、`SaveablePropertyAttribute.cs:7`）的成员遍历整棵对象树，将整棵树编码为紧凑的二进制格式。存档时，`SaveContext` 提供写入通道；读档时，`LoadContext` 负责重建对象引用。`DefinitionContext` 与 `SaveableTypeDefiner` 共同维护类型元数据，确保跨版本兼容。

## 心智模型

把存档过程想象成**深度优先遍历一棵树**：

1. **根节点**是 `Campaign` 对象，它持有所有子系统（Party、Settlement、Hero 等）的引用。
2. 每个已在 `SaveableTypeDefiner` 里 `AddClassDefinition(type, saveId)`（`SaveableTypeDefiner.cs:100`）注册过的类，才是一个**可序列化节点**；成员是否入档由 `[SaveableField]`/`[SaveableProperty]` 决定。
3. `SaveManager` 从根出发，把根对象压入 `_objectsToIterate` 工作队列（`SaveContext.cs:116`）后逐节点处理；没有逐对象 Write 回调。
4. `DefinitionContext.FillWithCurrentTypes()`（`DefinitionContext.cs:173`）在启动期一次性完成类型收集与 ID 分配；`DefineTypes` 这个方法不存在。
5. 读档时反向进行：由 `LoadContext.Load`（`LoadContext.cs:64`）按存档流里的类型定义重建对象；没有逐对象 Read 回调。

关键洞察：**对象引用被替换为整数 ID**。如果两个字段指向同一个对象，序列化时只写一次，后续引用只写 ID。这既节省空间，也保留了对象图的拓扑结构。

## 怎么用

### 存档流程

1. **启动期先一次性收齐类型定义。** `SaveManager.InitializeGlobalDefinitionContext()`（`SaveManager.cs:17`）内部只做两件事：`new DefinitionContext()`，然后 `FillWithCurrentTypes()`（`DefinitionContext.cs:173`）。类型定义不是存档时才收的。
2. **存档入口。** `SaveManager.Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`（`SaveManager.cs:69`）。`target` 就是对象图的根。
3. **内部构造 `SaveContext`。** 构造签名是 `SaveContext(DefinitionContext definitionContext)`（`SaveContext.cs:46`）；真正干活的是 `SaveContext.Save(object target, MetaData metaData, out string errorMessage)`（`SaveContext.cs:278`）。
4. **遍历是队列式 worklist，不是逐对象回调。** `SaveContext.Save` 先把根记下来（`this.RootObject = target;`，`SaveContext.cs:289`），再把根压进待处理队列（`this._objectsToIterate.Enqueue(this.RootObject);`，`SaveContext.cs:116`）。**没有 `ISaveable.Write` 这种回调**——对象不需要自己实现任何接口。
5. **谁被写进去由类型定义决定。** 只有已在某个 `SaveableTypeDefiner` 里用 `AddClassDefinition(type, saveId)`（`SaveableTypeDefiner.cs:100`）注册过的类才是可序列化节点。

### 读档流程

1. **读档入口。** `SaveManager.Load(string saveName, ISaveDriver driver)`（`SaveManager.cs:149`）；需要延迟初始化时用 `SaveManager.Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)`（`SaveManager.cs:155`）。
2. **内部构造 `LoadContext`。** 构造签名是 `LoadContext(DefinitionContext definitionContext, ISaveDriver driver)`（`LoadContext.cs:39`）；真正干活的是 `LoadContext.Load(LoadData loadData, bool loadAsLateInitialize)`（`LoadContext.cs:64`）。
3. **存档与读档共用同一个 `DefinitionContext`。** `SaveContext` 和 `LoadContext` 都持有它（`SaveContext.cs:27`、`LoadContext.cs:31`）——这是存档能对齐类型的前提。
4. **没有 `ISaveable.Read` 这种回调。** 对象是按存档流里的类型定义重建的。

### 自定义存档字段

若要在自定义类中参与存档：

1. 不需要实现任何接口。要做的是：给类写一个 `SaveableTypeDefiner` 子类并用 `AddClassDefinition(type, saveId)`（`SaveableTypeDefiner.cs:100`）注册，然后给要入档的成员打 `[SaveableField(id)]`/`[SaveableProperty(id)]`。
2. 在 `DefineClassTypes()`（`SaveableTypeDefiner.cs:30`）里注册类定义。
3. 在 `DefineContainerDefinitions()`（`SaveableTypeDefiner.cs:70`）里注册容器定义（如果类有集合字段）。
4. 确保类有无参构造函数，供反序列化时使用。

## 关键成员

### SaveManager

存档系统门面，协调存档与读档的完整流程。

- `SaveManager.cs:14` — 类声明，继承自 `SaveManagerBase`。
- `SaveManager.cs:17` — 静态实例访问点，全局唯一入口。
- `SaveManager.cs:69` — `SaveGame` 方法实现，创建 `SaveContext` 并启动序列化。
- `SaveManager.cs:149` — `public static LoadResult Load(string saveName, ISaveDriver driver)`：读档入口。

### DefinitionContext

类型定义上下文，负责在序列化前扫描并注册所有遇到的类型。

- `DefinitionContext.cs:10` — 类声明，维护类型 ID 映射表。
- `DefinitionContext.cs:68` — `DefineTypes` 入口，遍历对象图收集类型。
- `DefinitionContext.cs:173` — 类型注册逻辑，为每个新类型分配唯一 ID。
- `DefinitionContext.cs:278` — 类型查找，通过 ID 或类型名获取元数据。
- `DefinitionContext.cs:283` — 版本兼容检查，处理类型增删。
- `DefinitionContext.cs:285` — 类型别名映射，支持跨版本类型重命名。

### SaveableTypeDefiner

为特定模块定义可序列化类型的工具类。

- `SaveableTypeDefiner.cs:10` — 基类声明，提供类型定义基础设施。
- `SaveableTypeDefiner.cs:13` — 构造函数，接收 `DefinitionContext`。
- `SaveableTypeDefiner.cs:30` — `DefineTypes` 虚方法，子类重写以注册类型。
- `SaveableTypeDefiner.cs:70` — 类型注册辅助方法，简化注册流程。
- `SaveableTypeDefiner.cs:100` — 注册一个类定义，并给它分配在该 Definer 基号下唯一的小 id（见 `SaveableCampaignTypeDefiner.cs:52` 的官方范本）。
- `SaveableTypeDefiner.cs:157` — 嵌套类型注册，处理内部类。

### SaveContext

存档时的写入通道，提供类型安全的序列化 API。

- `SaveContext.cs:12` — 类声明，封装底层二进制写入。
- `SaveContext.cs:27` — `public DefinitionContext DefinitionContext { get; private set; }`：存档时查类型定义用的上下文。
- `SaveContext.cs:46` — `Write` 泛型方法，写入基本类型字段。
- `SaveContext.cs:278` — 引用表管理，记录已写入对象的 ID。

### LoadContext

读档时的读取通道，提供类型安全的反序列化 API。

- `LoadContext.cs:11` — 类声明，封装底层二进制读取。
- `LoadContext.cs:31` — `public DefinitionContext DefinitionContext { get; private set; }`：读档时查类型定义用的上下文。
- `LoadContext.cs:64` — `Read` 泛型方法，读取基本类型字段。

### SaveableCampaignTypeDefiner

Campaign 模块的类型定义器，注册所有 Campaign 相关的可序列化类型。

- `SaveableCampaignTypeDefiner.cs:41` — 类声明，继承自 `SaveableTypeDefiner`。
- `SaveableCampaignTypeDefiner.cs:44` — `DefineTypes` 实现，注册 Campaign 核心类型。
- `SaveableCampaignTypeDefiner.cs:50` — 注册 Party 相关类型。
- `SaveableCampaignTypeDefiner.cs:52` — 注册 Settlement 相关类型。

## 真实示例

### 示例一：存档一个自定义组件

```csharp
// 1. 定义类，打 [SaveableField]/[SaveableProperty] 标记要入档的成员
public class MyCustomComponent
{
    [SaveableField(1)]
    private int _value;

    [SaveableProperty(2)]
    public Hero Owner { get; private set; }
}

// 2. 写一个 Definer 子类，用 AddClassDefinition 注册
public class MyTypeDefiner : SaveableTypeDefiner
{
    public MyTypeDefiner() : base(1001) { }

    protected override void DefineClassTypes()
    {
        base.AddClassDefinition(typeof(MyCustomComponent), 1);
    }
}
```

### 示例二：理解引用去重

```csharp
// 假设 hero1 和 hero2 引用同一个 Party 对象
var party = new Party();
hero1.Party = party;
hero2.Party = party;

// 存档时，Party 只被序列化一次
// 第二次遇到时，只写入已分配的 ID
```

### 示例三：类型定义流程

```csharp
// 官方范本 SaveableCampaignTypeDefiner：
//   :41  class 声明    :44  无参构造    :50  override DefineClassTypes()    :52  AddClassDefinition(typeof(Army), 3, null)
public class MyTypeDefiner : SaveableTypeDefiner
{
    // 基类构造是 protected SaveableTypeDefiner(int saveBaseId)（SaveableTypeDefiner.cs:13）
    // ⇒ 传的是【基号】，不是 DefinitionContext
    public MyTypeDefiner() : base(1001) { }

    protected override void DefineClassTypes()          // SaveableTypeDefiner.cs:30
    {
        AddClassDefinition(typeof(MyCustomComponent), 1);   // SaveableTypeDefiner.cs:100
        AddClassDefinition(typeof(MyOtherComponent), 2);
    }

    protected override void DefineContainerDefinitions()    // SaveableTypeDefiner.cs:70
    {
        ConstructContainerDefinition(typeof(List<MyCustomComponent>));  // SaveableTypeDefiner.cs:157
    }
}
```

## 参见

- [存档系统 / Save System](../save-system)
- [GameModel 装饰模式](../gamemodel-decorator)
- [Action 家族](../action-family)
- [SaveManager 类页](../../api/save-system/SaveManager)
- [SaveContext 类页](../../api/save-system/SaveContext)
- [LoadContext 类页](../../api/save-system/LoadContext)
- [DefinitionContext 类页](../../api/save-system/DefinitionContext)
- [SaveableTypeDefiner 类页](../../api/save-system/SaveableTypeDefiner)
- [SaveableCampaignTypeDefiner 类页](../../api/campaign-ext/SaveableCampaignTypeDefiner)

## 导航

- ↑ Parent: [..](../)
- ↔ Sibling: [UI 三层架构](../ui-three-layers) | [Action 家族](../action-family) | [GameModel 装饰模式](../gamemodel-decorator)
- 相关类页: [SaveManager](../../api/save-system/SaveManager) | [SaveableCampaignTypeDefiner](../../api/campaign-ext/SaveableCampaignTypeDefiner)
