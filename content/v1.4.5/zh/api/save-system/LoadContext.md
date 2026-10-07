---
title: "LoadContext"
description: "读档期的总管：十一个阶段把字节还原成活对象，顺序是硬约束——先建全部对象，再解析引用，最后才并行填数据与跑初始化回调。"
---

# LoadContext

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class LoadContext`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Load/LoadContext.cs`

## 概述

[SaveManager](../SaveManager) 每次读档都**新建一个** [DefinitionContext](../DefinitionContext)（不复用保存时的缓存），从驱动读出 [LoadData](../LoadData)，再造一个 `LoadContext` 把 `Load` 跑完。`Load` 的十一个阶段顺序是硬约束：读 header 拿到三个计数 → 并行建所有对象头 → **串行**创建全部对象并认出根 → `GC.Collect` → 读字符串表 → `GC.Collect` → **串行**解析引用 → `GC.Collect` → 并行填对象数据 → 并行填容器数据 → `GC.Collect` → 按需跑初始化回调（`LoadContext.cs:59-241`）。这个顺序不是风格问题：对象的构造与引用解析必须全部完成后，才能安全地并行填成员值。

## 心智模型

把它想成**先把全城的地基和门牌都立好，再让每户自己搬家具**：第一遍只发门牌（创建空对象，串行），第二遍按门牌互相认亲（解析引用，串行），第三遍才并行搬家具（填成员值）。推论有四条：

1. **根对象由编号 0 认定。** `Create Objects` 阶段串行遍历，`if (objectHeaderLoadData2.Id == 0) RootObject = objectHeaderLoadData2.Target;`（`:120-122`）。这与保存期「根对象最先入队所以是 0」是同一个约定的两端。
2. **并行只发生在「对象已经全部存在」之后。** `Load Headers` 里的头解析并行（`:92`、`:102`），`Load Object Datas` 与 `Load Container Datas` 并行（`:184`、`:217`）；但 `Create Objects`（`:114`）与 `Resolve Objects`（`:147`）都是串行 for 循环。**如果你在某个类型的初始化回调里读另一个对象的字段，那个对象的值此时尚未填上**——并行填值还没开始或还在进行中。
3. **对象数据只在 `Target == LoadedObject` 时才读。** 两处都是这个条件（`:176`、`:189`）。被 resolver 换过实例的对象（`Target != LoadedObject`）已经在 `Resolve Objects` 阶段处理过了，再读一遍会重复。
4. **`TryConvertType` 里有一段真实死代码。** 第三个分支先判 `sourceType` 是 `List<>` 且 `targetType` 是泛型，然后只做 `_ = targetType.GetGenericTypeDefinition() == typeof(MBList<>);`（`:288-291`）——**算完就丢，既不 return true 也不赋值**，方法末尾照样 `return false`（`:292`）。所以**当前版本不支持 `List<T>` 到 `MBList<T>` 的自动转换**。想改字段类型就得走 [IConflictResolver](../IConflictResolver) 或改代码。

## 如何使用

### 怎么拿到它

**不要自己 `new`。** 正统入口是 [SaveManager](../SaveManager).Load：`new LoadContext(definitionContext, driver)`（`:31` 构造器，两个参数）→ `Load(LoadData loadData, bool loadAsLateInitialize)`（`:54`）→ 成功后从 `RootObject`（`:25`）取回根对象。`loadAsLateInitialize` 这个开关决定初始化回调在 `Load` 内部跑（`:236-241`）还是延后给调用方——传 `true` 时 `SaveManager` 会另外 `CreateLoadCallbackInitializator`（`:251`）并把它装进 [LoadResult](../LoadResult)，由 mod 或上层自己择机调用。

### 最小可运行片段

```csharp
// 正规路径：SaveManager 负责建 DefinitionContext 与 LoadContext
LoadResult result = SaveManager.Load("slot1.sav", driver);
if (!result.Successful)
{
    Debug.Print("读档失败", 0);
}
else
{
    Game game = (Game)result.LoadedObject;   // 编号 0 的那个
    Debug.Print("根对象 = " + game.GetType().Name, 0);

    // 延迟初始化：自己择机跑
    if (result.LoadCallbackInitializator != null)
    {
        result.LoadCallbackInitializator.InitializeObjects();
        result.LoadCallbackInitializator.AfterInitializeObjects();
    }
}

// 引用查询：-1 一律给回 null，不会抛
// ObjectHeaderLoadData objHeader = context.GetObjectWithId(-1);   // null
// string s = context.GetStringWithId(-1);                          // null
```

### 用它最容易踩的一条

**在 mod 的初始化回调里读取「别的对象」的状态，读到的是空的。** 因为 `Load Object Datas` 是 `TWParallel.ForWithoutRenderThread` 并行跑的（`:184`），而 `InitializeObjects` / `AfterInitializeObjects` 在它之后（`:239-240`）——理论上这时值都填好了；**真正危险的是把逻辑塞进更早的钩子**：自定义 [IObjectResolver](../IObjectResolver) 的 `Resolve` 阶段（`:156-161` 之间）对象刚被认亲、成员值一个都还没填。`LoadCallbackInitializator` 存在就是为了把这类回调推到「全部填完」之后。**不要在 resolver 里读业务状态。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RootObject` | `public object RootObject { get; private set; }` | 编号 0 对应的实例，在 `Create Objects` 阶段认定（`:120-122`）。`SaveManager.Load` 成功后把它塞进 [LoadResult](../LoadResult) 的 `LoadedObject`。**只赋值一次**，重复 `Load` 会重新赋值。 |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; private set; }` | 构造器注入。**每次 `SaveManager.Load` 都是新实例**（`SaveManager.cs` 里 `new DefinitionContext()` + `FillWithCurrentTypes()`），所以一个存档里的旧编号是按「当前版本的定义表」解析的——这也是 [IConflictResolver](../IConflictResolver) 存在的原因。 |
| `Driver` | `public ISaveDriver Driver { get; private set; }` | 构造器注入的驱动。**注意它在 `LoadContext` 里只被存下来，`:54` 的 Load 全程没用它**——字节已经由 `LoadData` 带来了。真正用驱动的是 [SaveManager](../SaveManager) 的 `driver.Load(saveName)` 那一步。 |
| `Load` | `public bool Load(LoadData loadData, bool loadAsLateInitialize)` | 主流程，`:54-249`。整个方法体包在 try/catch 里，异常只 `Debug.Print(ex.Message)` 然后 `return false`（`:244-247`）——**没有错误细节、没有堆栈**，所以读档失败时日志里往往只有一句 message。`SaveManager` 拿到 false 后统一包成 `LoadError("Not implemented")`（`SaveManager.cs`）——**那个文案是字面量，不代表真实原因**。 |
| `EnableLoadStatistics` | `public static bool EnableLoadStatistics => false` | 统计开关，硬编码 false（`:23`）。因此 `:73-89` 与 `:171-181`、`:199-214` 三处串行分支是死路径，正常走的是并行的 `:92`、`:184`、`:217`。 |
| `CreateLoadData` | `internal static ObjectLoadData CreateLoadData(LoadData loadData, int i, ObjectHeaderLoadData header)` | `:40-52`。五步固定流程：`ArchiveDeserializer.LoadFrom(GameData.ObjectData[i])` → 取根 folder → `new ObjectLoadData(header)` → `GetChildFolder(new FolderId(i, SaveFolderExtension.Object))` → `InitializeReaders` / `FillCreatedObject` / `Read` / `FillObject`。**每读一个对象都新开一个反序列化器**，这是它成为读档热点的原因之一。 |
| 三个计数 | `private int _objectCount / _stringCount / _containerCount` | 在 `:67-69` 从 header 的 config 条目里连读三个 int，然后据此分配 `_objectHeaderLoadDatas`（`:70`）、`_containerHeaderLoadDatas`（`:71`）与 `_strings`。**这三个数决定了后面所有循环的次数**，也是整个读档的规模指标。 |
| `Create Objects` 阶段 | `LoadContext.cs:114-133` | 串行。逐个 `objectHeaderLoadData2.CreateObject()`（`:119`），`Id == 0` 的认作根（`:120-122`）；容器侧则要先 `GetObjectTypeDefinition()` 为真才 `CreateObject()`（`:128-130`）。**这是唯一能安全调用对象构造逻辑的时点**。 |
| `Resolve Objects` 阶段 | `LoadContext.cs:147-167` | 串行。按 `typeDefinition.CheckIfRequiresAdvancedResolving(loadedObject)`（`:156`）二选一：真则 `CreateLoadData(...)`（`:158`）+ `AdvancedResolveObject(metaData, objectLoadData)`（`:159`），否则 `ResolveObject()`（`:163`）。**这是 IObjectResolver / IEnumResolver 唯一被调用的地方。** |
| `Load Object Datas` 阶段 | `LoadContext.cs:169-195` | 并行，且**只在 `Target == LoadedObject` 时**才 `CreateLoadData`（`:176`、`:189`）。被 resolver 换过实例的对象已在上一阶段处理，跳过是去重。 |
| `Load Container Datas` 阶段 | `LoadContext.cs:197-233` | 并行。每个容器新开一个 `ArchiveDeserializer`（`:219` 区间内），然后 `InitializeReaders` / `FillCreatedObject` / `Read` / `FillObject`。 |
| 回调时点 | `LoadContext.cs:236-241` | `if (!loadAsLateInitialize)` 才 `CreateLoadCallbackInitializator(loadData)` → `InitializeObjects()` → `AfterInitializeObjects()`。**传 true 时这三步都不做**，改由 [SaveManager](../SaveManager) 把 initializator 装进 `LoadResult` 交给上层择机调用。 |
| `GC.Collect` ×4 | `LoadContext.cs:135`、`:146`、`:168`、`:235` | 分别在读完头、建完全部对象、解析完引用、填完全部数据之后各收一次。**读档内存峰值明显高于稳态**，这四次回收就是为此。 |
| `CreateLoadCallbackInitializator` | `internal LoadCallbackInitializator CreateLoadCallbackInitializator(LoadData loadData)` | `:251-254`，把 `loadData`、`_objectHeaderLoadDatas`、`_objectCount` 交给 [LoadCallbackInitializator](../LoadCallbackInitializator)。`SaveManager` 在 `loadAsLateInitialize` 为 true 时会再调一次拿同一个实例。 |
| `LoadString` | `private static string LoadString(ArchiveDeserializer saveArchive, int id)` | `:256-259`。按 `FolderId(-1, SaveFolderExtension.Strings)` → `EntryId(id, SaveEntryExtension.Txt)` → `GetBinaryReader().ReadString()` 取一条字符串。**这三个常量与保存期的写入路径是对称的**，改扩展名会同时毁掉读写两侧。 |
| `TryConvertType` | `public static bool TryConvertType(Type sourceType, Type targetType, ref object data)` | `:262-316`。支持数值↔数值（`Convert.ChangeType`，`:264-273`）、数值→string（整型 `Convert.ToInt64` `:278-280`，浮点 `Convert.ToDouble(...).ToString(CultureInfo.InvariantCulture)` `:282-284`）。**第三分支 `:288-291` 是死代码**：只算了 `_ = ...` 就丢掉，最后 `return false`（`:292`）。末尾三个 `static` 局部函数 `isFloat`（`:293`）/`isInt`（`:301`）/`isNum`（`:309`）只把 7 种数值类型认作数字。 |
| `GetObjectWithId` / `GetContainerWithId` / `GetStringWithId` | `public ObjectHeaderLoadData GetObjectWithId(int id)`（`:319`）等 | 三个查询，`if (id != -1)` 才去下标取，否则返回 null（`:322`、`:332`、`:342`）。**-1 是存档里「null 引用」的标准写法**（保存期 `VariableSaveData` 把 null 写成 -1），所以这里的 -1 判断不是可选的防御，是协议的一部分。 |

## 真实示例

十一阶段的骨架（`TaleWorlds.SaveSystem.Load/LoadContext.cs:59-241`，只列阶段与并行/串行属性）：

```csharp
using (new PerformanceTestBlock("LoadContext::Load Headers"))           // :59
using (new PerformanceTestBlock("LoadContext::Load And Create Header"))// :61  并行建对象/容器头
using (new PerformanceTestBlock("LoadContext::Create Objects"))       // :114 串行，Id==0 → RootObject
GC.Collect();                                                        // :135
using (new PerformanceTestBlock("LoadContext::Load Strings"))          // :136
GC.Collect();                                                        // :146
using (new PerformanceTestBlock("LoadContext::Resolve Objects"))       // :147 串行，resolver 在这里
GC.Collect();                                                        // :168
using (new PerformanceTestBlock("LoadContext::Load Object Datas"))     // :169 并行，Target == LoadedObject 才填
using (new PerformanceTestBlock("LoadContext::Load Container Datas"))  // :197 并行
GC.Collect();                                                        // :235
if (!loadAsLateInitialize) { ... }                                    // :236
```

三个 int 是整条链路的起点（`LoadContext.cs:65-71`）：

```csharp
BinaryReader binaryReader = headerRootFolder.GetEntry(new EntryId(-1, SaveFolderExtension.Config)).GetBinaryReader();
_objectCount = binaryReader.ReadInt();
_stringCount = binaryReader.ReadInt();
_containerCount = binaryReader.ReadInt();
_objectHeaderLoadDatas = new ObjectHeaderLoadData[_objectCount];
_containerHeaderLoadDatas = new ContainerHeaderLoadData[_containerCount];
_strings = new string[_stringCount];
```

mod 视角的对照实验——`TryConvertType` 的能力边界：

```csharp
// 数值之间可以转（成功返回 true）
object n = 5;
bool okNum = LoadContext.TryConvertType(typeof(int), typeof(long), ref n);   // true

// 数值转 string 可以
object s = 5;
bool okStr = LoadContext.TryConvertType(typeof(int), typeof(string), ref s);  // true，s = "5"

// List<int> → MBList<int> 不行：第三分支是死代码，永远返回 false
// object list = new List<int>();
// bool okList = LoadContext.TryConvertType(typeof(List<int>), typeof(MBList<int>), ref list);  // 恒 false
```

## 依赖关系

- 唯一调用者：[SaveManager](../SaveManager) 的 `Load`（每次都新建 `DefinitionContext` 与本类）
- 输入：[LoadData](../LoadData)（带 `GameData`）、`ISaveDriver`（见 [ISaveDriver](../ISaveDriver)）、[MetaData](../MetaData)（经 `loadData`）
- 阶段产出：[ObjectHeaderLoadData](../ObjectHeaderLoadData)、[ContainerHeaderLoadData](../ContainerHeaderLoadData)、[ObjectLoadData](../ObjectLoadData)、[ContainerLoadData](../ContainerLoadData)
- 槽位基类：[VariableLoadData](../VariableLoadData)（六分支反序列化与 `GetDataToUse`）
- 归档层：[ArchiveDeserializer](../ArchiveDeserializer)、[SaveEntryFolder](../SaveEntryFolder)、[EntryId](../EntryId)、[FolderId](../FolderId)、[SaveEntryExtension](../SaveEntryExtension)、[SaveFolderExtension](../SaveFolderExtension)
- 定义与冲突：[DefinitionContext](../DefinitionContext)、[IObjectResolver](../IObjectResolver)、[IEnumResolver](../IEnumResolver)、[IConflictResolver](../IConflictResolver)（只在 `SaveManager.ShouldResolveConflicts()` 为真时生效，即读档期）
- 回调：[LoadCallbackInitializator](../LoadCallbackInitializator)、[LoadResult](../LoadResult)、[LoadInitializationCallback](../LoadInitializationCallback)、[LateLoadInitializationCallback](../LateLoadInitializationCallback)
- 保存侧镜像：[SaveContext](../SaveContext)、[ObjectSaveData](../ObjectSaveData)、[ContainerSaveData](../ContainerSaveData)
- 体系全貌：../../../architecture/save-system