---
title: "SaveContext"
description: "写盘期的总管：从根对象广度优先遍历整张对象图，收集字符串表，把每个对象与容器各编一个号，最后拼出 header / strings / object / container 四段字节交给驱动。"
---

# SaveContext

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveContext : ISaveContext`
**Base:** 无（实现 `ISaveContext`）
**File:** `TaleWorlds.SaveSystem.Save/SaveContext.cs`

## 概述

存档不是「把字段一个一个写下去」，而是**先给整张对象图编号，再按编号落盘**。[SaveManager](../SaveManager) 造一个 `SaveContext` 并把根对象交给它，`SaveContext.Save` 负责四件事。第一，**广度优先遍历**：从 `RootObject` 出发，同一个对象无论被引用多少次只分配一个编号，重复引用靠复用编号表达（`SaveContext.cs:169`）。第二，**收集字符串表**：`string` 字段的值在这里被去重并换成整数编号（`AddOrGetStringId`，`:246`）。第三，**为每个对象/容器建一个 SaveData**：对象走 [ObjectSaveData](../ObjectSaveData)，容器走 [ContainerSaveData](../ContainerSaveData)，槽位由 [VariableSaveData](../VariableSaveData) 的七分支决定。第四，**拼四段字节**：`header`（每个对象与容器的元信息）、`strings`（字符串表）、`objectData`、`containerData`，一起装进 [GameData](../GameData)。对象与容器的数据收集和写盘都跑在 `TWParallel.ForWithoutRenderThread` 上。

## 心智模型

把它想成**海关的报关大厅**：每个托运人（对象）进来先领一个登记号，同一个公司来多少次都只发一个号；所有重复的货物描述（字符串）集中到一张对照表上换成索引；最后大厅吐出四摞单据——登记册（header）、对照表（strings）、人身单（objectData）、货箱单（containerData）。由此推出四条边界：

1. **编号 0 属于根对象，所以「找不到」会静默变成「指向根」。** `GetObjectId` 在 `_idsOfChildObjects` 里查不到目标时，只 `Debug.Print` 加 `Debug.FailedAssert`，然后 `return value;`（`:274-282`）——`TryGetValue` 失败时 `value` 是 `default(int)`，也就是 **0**。而 0 正是 `CollectObjects` 最先进队的那个根对象（`:171`）。所以一个没被收集到的引用会被写成「指向存档根」的真实引用，读档后字段里出现的是根对象而不是 null，**全程无异常**。
2. **`Save` 的 `metaData` 参数是摆设。** 签名是 `Save(object target, MetaData metaData, out string errorMessage)`（`:322`），但整个方法体 `:324-356` 没有一处读它。元数据由 [SaveManager](../SaveManager) 自己写进 [MetaData](../MetaData)，不经过这里。同理 `:343` 那句 `new List<int>();` 是一个丢弃结果的死语句。
3. **大小统计 `SizeRecord` 是 `static`。** `private static SaveDataSizeRecord SizeRecord;`（`:67`）被 `Interlocked.Add` 并发累加（`:267`、`:487-488`、`:501-502`）。这是为了并行累加不加锁的常见做法，但也意味着**两个 `SaveContext` 实例会互相污染同一个计数器**。
4. **统计功能整条路是死的。** `public static bool EnableSaveStatistics => false;`（`:101`）是硬编码常量，所以 `:326-330`、`:520`、`:548` 三处 `if (EnableSaveStatistics)` 分支里的字典初始化与累加永远不执行。想要存档体积统计只能改这个常量，运行时没有任何开关。

## 如何使用

### 怎么拿到它

**不要自己 `new`。** 正统入口是 [SaveManager](../SaveManager).Save，它在定义上下文就绪后 `new SaveContext(_definitionContext)` 并调 `Save`。如果要在自己的流程里单独跑一次保存（例如导出诊断快照），构造器只有一个重载：`SaveContext(DefinitionContext definitionContext)`（`:108`），之后必须调 `Save(object target, MetaData metaData, out string errorMessage)`（`:322`）——它把结果写进 `SaveData` 属性（`:97`），驱动再取走。构造器会把四张表按 131072 预分配（`:109-114`），所以它**不是廉价对象**。

### 最小可运行片段

```csharp
// 正规路径：交给 SaveManager
SaveOutput output = SaveManager.Save(someRootObject, gameStateMetaData, "mod_debug.sav", driver);
if (output.Result != SaveResult.Success)
{
    Debug.Print("保存失败：" + output.Result, 0);
}

// 想单独跑一次收集（诊断用），必须自己准备定义上下文
var ctx = new SaveContext(definitionContext);
bool ok = ctx.Save(someRootObject, gameStateMetaData, out string errorMessage);
if (!ok)
{
    // catch 分支把异常压成 "SaveContext Error\n" + ex.Message（:353-355）
    Debug.Print(errorMessage, 0);
}
GameData data = ctx.SaveData;      // header / strings / objectData / containerData 四段
Debug.Print("根对象编号 = 0（CollectObjects 最先进队的就是它）", 0);
```

### 用它最容易踩的一条

**用 `out` 拿到字符串编号去反查时，别忘了 -1 代表 null。** `AddOrGetStringId(string text)` 对 `text == null` 直接返回 -1 且**不把它加进字符串表**（`:249-251`）。所以一个 null 字符串字段在存档里是 -1，读回来必须是 null。读档侧 `LoadContext.GetStringWithId(int id)` 对 -1 返回 null（`:339-346`）——**两端是配对的**，但如果你自己写工具解析存档，把 -1 当下标去取就会越界。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RootObject` | `public object RootObject { get; private set; }` | 遍历起点，`Save` 里第一句赋值（`:333`）。它就是编号 0，读档侧 `LoadContext` 也靠 `Id == 0` 认根（`LoadContext.cs:120-122`）。**保存结束后不要再改它**，已经收集的编号不会跟着更新。 |
| `SaveData` | `public GameData SaveData { get; private set; }` | 四段字节的载体，在 `:346` 由 `new GameData(header, strings, objectData, containerData)` 造出。**只有 `Save` 成功返回 true 之后它才有值**，失败时仍是 null。驱动 `Save` 拿的就是它。 |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; private set; }` | 构造器注入的类型定义表，遍历时用来判定容器形状（`:178`）与查类型定义（`:200`、`:230`）。**它是只读的**，改定义要在构造之前完成。 |
| `Save(object, MetaData, out string)` | `public bool Save(object target, MetaData metaData, out string errorMessage)` | 唯一的保存入口。全流程包在 try/catch（`:331`、`:351`）里，任何异常被压成 `errorMessage = "SaveContext Error\n" + ex.Message`（`:353-355`）并返回 false——**原始堆栈丢失**，所以失败时日志里只有一句 message。`metaData` 形参在方法体里未被读取。 |
| `CollectObjects` | `private void CollectObjects()` | 广度优先遍历（`:169-188`）。`_objectsToIterate` 这个 `Queue<object>`（`:93`）先进根对象，`IsContainer` 为真走 `CollectContainerObjects`、否则走 `CollectObjects(object)`。两个重载都先 `ContainsKey` 再 `Add`（`:192`、`:221`），所以同一对象只占一个编号。 |
| `CollectContainerObjects` | `private void CollectContainerObjects(ContainerType containerType, object parent)` | 容器的入队与递归。`GetContainerDefinition` 返回 null 时**只 `Debug.Print` + `Debug.FailedAssert`、不抛异常**（`:201-205`），然后仍继续往下走——这是与对象侧最大的行为差异。 |
| `GetObjectId` | `public int GetObjectId(object target)` | 槽位查对象编号。**查不到时打印并断言，但 `return value;`（`:281`）返回的是 `TryGetValue` 失败留下的 0**，即根对象的编号。这是最容易造成「字段静默指向根」的入口。 |
| `GetContainerId` | `public int GetContainerId(object target)` | 容器编号查询，裸索引 `_idsOfChildContainers[target]`（`:286`）。**没有 null 检查也没有 TryGetValue**，未知容器直接抛 `KeyNotFoundException`，不像 `GetObjectId` 那样静默。 |
| `GetStringId` | `public int GetStringId(string target)` | 字符串表编号。`target == null` 返回 -1（`:291-293`），否则裸索引 `_idsOfStrings[target]`（`:298`）——不在表里就抛。**保存侧正常路径只会收到 `CollectStrings` 已经登记过的字符串。** |
| `AddOrGetStringId` | `public int AddOrGetStringId(string text)` | 字符串去重入口，`lock (_locker)` 保护（`:255`），首次出现时追加并 `Interlocked.Add` 累加字节数（`:267`）。null 返回 -1 且不入表（`:249-251`）。 |
| `GetStringSizeInBytes` | `public static int GetStringSizeInBytes(string text)` | `4 + Encoding.UTF8.GetByteCount(text)`（`:314`）。前导 4 字节是长度前缀。`GetStringSizeWithOverhead` 再加 9（`:319`），用于统计表。 |
| `WriteHeaders` | `private static byte[] WriteHeaders(ObjectSaveData[] objects, ContainerSaveData[] containers, int headerSize, int stringCount)` | 写 header 段。先写对象数+容器数（`:414`），再逐个 `SaveHeaderFolderTo`，再逐个 `SaveHeaderDataTo`，最后 `WriteConfigEntry`（`:431`）写 objects/strings/containers 三个计数——**读档侧就靠这三个 int 起步**（`LoadContext.cs:67-69`）。 |
| `WriteConfigEntry` | `private static void WriteConfigEntry(BinaryWriter headerWriter, int objects, int strings, int containers)` | header 末尾那个固定条目：两个 3 字节 -1、一个字节 7（`SaveFolderExtension.Config`）、一个 short 12，再三个 int。预算常量 `GetConfigEntrySize() => 29`（`:471`）、`GetStringFolderSize() => 18`（`:476`）。 |
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics => false` | 统计开关，**硬编码 false**（`:101`）。因此 `:326-330` 的字典初始化、`:520-531` 的类型统计、`:548-559` 的容器统计全部是死路径。改它等于改编译常量。 |
| `SaveStatistics` | `public struct SaveStatistics(Dictionary<string, (int,int,int,long)> typeStatistics, Dictionary<string, (int,int,int,int,long)> containerStatistics)` | **嵌套在本文件里的结构体**（`:31`），用 C# 主构造函数接两个字典并在 `:33`、`:35` 捕获为私有字段。`GetObjectCounts` 有 `ContainsKey` 保护（`:39`），`GetContainerCounts`（`:46`）与 `GetContainerSize`（`:51`）**没有**，缺 key 抛 `KeyNotFoundException`。因为统计是关的，正常流程拿不到它。 |
| `SaveDataSizeRecord` | `private struct SaveDataSizeRecord`（含 `HeaderSize`/`StringSize`/`ObjectSize`/`ContainerSize`） | 尺寸记账结构（`:15-21`），`ToString()`（`:23`）把四段拼成一句 `Total size: X MB`。背后的 `SizeRecord` 字段是 **static**（`:67`），所以多实例并行保存会互相污染。 |
| `GetContainerName` | `private string GetContainerName(Type t)` | 统计用的容器名拼接：容器本身用 `t.Name`，元素若是容器则递归拼接，否则直接拼类型名（`:562-570`）。**只在统计开启时被调用**。 |

## 真实示例

收集阶段的固定顺序是 `Structs → Members → Strings`（`TaleWorlds.SaveSystem.Save/SaveContext.cs:479-489`）——**字符串必须在成员之后收集**，因为成员槽位的值正是这时才填上的：

```csharp
private void CollectSaveDataForObject(int id, ref SaveDataSizeRecord headerSize)
{
    object target = _childObjects[id];
    ObjectSaveData objectSaveData = new ObjectSaveData(this, id, target, isClass: true);
    objectSaveData.CollectStructs();     // 先把结构体成员变成独立的子 ObjectSaveData
    objectSaveData.CollectMembers();     // 再把每个字段/属性变成槽位并填值
    objectSaveData.CollectStrings();     // 最后把槽位里的字符串去重进表
    _objectSaveDataList[id] = objectSaveData;
    Interlocked.Add(ref headerSize.HeaderSize, objectSaveData.GetHeaderSize());
    Interlocked.Add(ref headerSize.ObjectSize, objectSaveData.GetDataSize());
}
```

容器侧的同一段多一步 `CollectChildren`（`:491-503`）：

```csharp
ContainerSaveData containerSaveData = new ContainerSaveData(this, id, obj, containerType);
containerSaveData.CollectChildren();     // 逐元素建 ElementSaveData
containerSaveData.CollectStructs();
containerSaveData.CollectMembers();
containerSaveData.CollectStrings();
```

mod 视角的对照实验——为什么「找不到对象」会指向根：

```csharp
// 根对象必然是 0 号；GetObjectId 未命中也返回 0
// int rootId = context.GetObjectId(context.RootObject);      // 必然 0
// int bogus  = context.GetObjectId(new object());            // 也可能返回 0，只有一行 Debug.Print
Debug.Print("GetObjectId 未命中返回的是 TryGetValue 的默认值 0，而不是 -1", 0);
Debug.Print("对比：GetContainerId 与 GetStringId 未命中会直接抛 KeyNotFoundException", 0);
```

## 依赖关系

- 唯一调用者：[SaveManager](../SaveManager) 的 `Save`（`SaveManager.cs:98` 造 `SaveContext`，随后取 `SaveData` 交给驱动）
- 遍历产出的两类数据：[ObjectSaveData](../ObjectSaveData)（类与结构体）、[ContainerSaveData](../ContainerSaveData)（容器与元素）
- 槽位基类与标签：[VariableSaveData](../VariableSaveData)、[SavedMemberType](../SavedMemberType)、[MemberTypeId](../MemberTypeId)
- 槽位实现：[FieldSaveData](../FieldSaveData)、[PropertySaveData](../PropertySaveData)、[MemberSaveData](../MemberSaveData)、[ElementSaveData](../ElementSaveData)
- 定义与编号：[DefinitionContext](../DefinitionContext)、[SaveId](../SaveId)、[ContainerType](../ContainerType)、[TypeExtensions](../TypeExtensions)（`IsContainer`）
- 成品与出口：[GameData](../GameData)、`ISaveDriver`（见 [ISaveDriver](../ISaveDriver) 与 [FileDriver](../FileDriver)）
- 读档侧的镜像：[LoadContext](../LoadContext)（含三步 `Create`/`Resolve` 与并行读对象/容器的先后）
- 元数据（`Save` 收了但不用）：[MetaData](../MetaData)
- 体系全貌：../../../architecture/save-system