---
title: "LoadContext"
description: "读档过程的状态载体：持有对象/容器/字符串三张头部表与根对象，Load() 按固定六阶段把字节流还原成对象图。"
---
# LoadContext

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class LoadContext`
**Source:** `TaleWorlds.SaveSystem/Load/LoadContext.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`LoadContext` 是**读档过程的唯一状态载体**。它由 `SaveManager` 构造——`TaleWorlds.SaveSystem/SaveManager.cs:162` 的 `new LoadContext(definitionContext, driver)`——然后 `Load()` 一次调用跑完整条还原流水线，把磁盘上的分片字节流变成一个活的对象图，最后把入口对象挂在 `RootObject` 上。

它的内部状态只有三张表加三个计数：对象头部表（`ObjectHeaderLoadData[]`）、容器头部表（`ContainerHeaderLoadData[]`）、字符串表（`string[]`）。`Load` 的第一件事就是从存档的 header 分片里读出这三个计数并分配数组，之后所有阶段都在这三张表上原地推进。

它与 `DefinitionContext` 的关系是「读档的两半」：`DefinitionContext` 回答「编号 N 是什么类型」（`LoadContext` 通过 `DefinitionContext` 属性持有它，`LoadContext.cs:31`），`LoadContext` 回答「id N 对应的实例在哪、字段怎么填」。

## 心智模型

`Load()`（`LoadContext.cs:64`）是一条**六阶段流水线**，每一阶段前几乎都插一次 `GC.Collect()`。理解这条流水线比记住任何单个方法都重要：

1. **建头部表（Headers / Create Header）。** 从 `loadData.GameData.Header` 解出 header 归档，读 config 条目拿到 `_objectCount` / `_stringCount` / `_containerCount`，分配三张表。然后为每个对象 id 建一个 `ObjectHeaderLoadData` 并挂上读者；容器同理。这一步在 `EnableLoadStatistics` 为假时走 `TWParallel.ForWithoutRenderThread(..., 16)` **并行**执行。
2. **造对象（Create Objects）。** 逐个 `CreateObject()`。**id 为 0 的那个对象被赋给 `RootObject`**——这就是「根对象」在读取侧的落地方式。容器头部也在这里按需造对象。
3. **读字符串（Load Strings）。** 每个字符串单独存成一个归档条目，逐条 `LoadString` 解出后填进 `_strings`。
4. **解析引用（Resolve Objects）。** 对每个有类型定义的头部：需要「高级解析」的走 `CreateLoadData` + `AdvancedResolveObject`，否则走 `ResolveObject`。**这一步决定对象之间的引用关系。**
5. **读对象数据（Load Object Datas）。** 只处理 `Target == LoadedObject` 的那些（即需要真正填字段的对象），并行执行 `CreateLoadData`。`CreateLoadData`（`LoadContext.cs:49`）内部按 `FillCreatedObject → Read → FillObject` 三步走。
6. **读容器数据（Load Container Datas）。** 与第 5 步同构，并行处理容器分片。

收尾：若 `loadAsLateInitialize` 为假，立刻建 `LoadCallbackInitializator`（`LoadContext.cs:261`）并依次调 `InitializeObjects()` 与 `AfterInitializeObjects()`；若为真，则把这个初始化器交回调用方，等对象图整体就绪后再跑回调。整个流程包在 `try/catch` 里，**任何异常都被吞成 `Debug.Print` + 返回 false**。

第二个心智要点：**它是「一次性的」**。`Load` 只能跑一次——头部表在第一次调用时被分配并填充，重复调用会从头重建，旧状态丢失。`GetObjectWithId` / `GetContainerWithId` / `GetStringWithId` 这三个查询方法只在 `Load` 之后才有意义。

## 怎么用

### 怎么拿到

不要自己 `new`。官方路径是 `SaveManager.Load`：

```csharp
// TaleWorlds.SaveSystem/SaveManager.cs:158-171
DefinitionContext definitionContext = new DefinitionContext();
definitionContext.FillWithCurrentTypes();
LoadData loadData = driver.Load(saveName);
LoadContext loadContext = new LoadContext(definitionContext, driver);   // SaveManager.cs:162
if (loadContext.Load(loadData, loadAsLateInitialize))                    // LoadContext.cs:64
{
    object root = loadContext.RootObject;                                // LoadContext.cs:26
}
```

如果你在写自定义加载工具，构造签名是 `LoadContext(DefinitionContext definitionContext, ISaveDriver driver)`，两个参数都必须先准备好——`DefinitionContext` 得已经 `FillWithCurrentTypes()` 过，否则 `Load` 期间的类型解析全部落空。

### 典型用法

读档后用三个 id 查询方法做后置检查或修复：

```csharp
LoadContext ctx = new LoadContext(definitionContext, driver);   // SaveManager.cs:162
bool ok = ctx.Load(loadData, false);                            // LoadContext.cs:64

if (ok)
{
    // id 0 就是根对象（Game 实例）
    Debug.Print("root = " + ctx.RootObject?.GetType().Name);     // LoadContext.cs:26

    // 按 id 取回对象 / 容器 / 字符串；id 为 -1 时统一返回 null
    ObjectHeaderLoadData obj = ctx.GetObjectWithId(42);           // LoadContext.cs:308
    ContainerHeaderLoadData box = ctx.GetContainerWithId(7);      // LoadContext.cs:319
    string text = ctx.GetStringWithId(3);                         // LoadContext.cs:330
}
```

两阶段加载（先建对象图、后跑初始化回调）：

```csharp
// loadAsLateInitialize = true 时不跑回调，把初始化器交回给你
if (ctx.Load(loadData, true))                                    // LoadContext.cs:64
{
    LoadCallbackInitializator init = ctx.CreateLoadCallbackInitializator(loadData); // LoadContext.cs:261
    init.InitializeObjects();
    init.AfterInitializeObjects();
}
```

### 坑

- **`EnableLoadStatistics` 恒为 `false`。** 它是只读属性、实现体直接 `return false;`（`LoadContext.cs:15`），**不可配置**。所以「统计模式」那条串行路径是死代码，实际永远走 `TWParallel` 并行路径。
- **异常被吞。** `Load` 把一切异常变成 `Debug.Print(ex.Message)` 加返回 `false`（`LoadContext.cs:64` 的 catch 分支）。读档失败时调用方只拿到一个 bool，**没有异常栈、没有错误对象**——排查必须去翻日志。
- **`id == -1` 是「无」的哨兵。** 三个查询方法（`LoadContext.cs:308` / `LoadContext.cs:319` / `LoadContext.cs:330`）都先判断 `id != -1`，否则直接返回 null。这不是「查不到」，而是「本就没有」。
- **`TryConvertType` 的 `List<>` → `MBList<>` 分支是空操作。** 见 `LoadContext.cs:274` 的实现：那一段算出 `targetType.GetGenericTypeDefinition() == typeof(MBList<>)` 后**把结果丢掉**，函数最终仍返回 `false`。别指望它能做集合类型转换。
- **并行阶段要求数据无共享写入。** 头部建表、对象数据、容器数据三个阶段都在 `TWParallel` 里跑。如果你替换了 `ISaveDriver` 并让它返回共享缓冲，会踩到并发问题。
- **`LoadContext` 这个名字与 BCL 撞名。** .NET 在 `System.Reflection` 下也有一个同名类型（本源码树里的 `mscorlib/System/Reflection/LoadContext.cs` 就是它）。同时 `using System.Reflection;` 与 `using TaleWorlds.SaveSystem.Load;` 会让裸写 `LoadContext` 变成歧义引用，必须用全限定名或别名。这也意味着**单看 `LoadContext.cs` 这个文件名分不清是哪一个**——引用时必须带上 `TaleWorlds.SaveSystem/Load/` 这段路径才无歧义。
- **`RootObject` 是 id 0 的对象。** 没有「按名字找根」的机制；根对象由存档头部决定，读档侧只负责在 id 0 上把它取出来。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `EnableLoadStatistics` | `public static bool EnableLoadStatistics` | 静态只读属性，**实现体就是 `return false;`**。它决定头部建表、对象数据、容器数据三个阶段走串行还是 `TWParallel`。因为恒为 false，串行分支是死代码；不要指望通过它拿到加载统计。 | `LoadContext.cs:15` |
| `RootObject` | `public object RootObject { get; private set; }` | 读档结果的对象图入口。在「Create Objects」阶段由 **id 为 0 的那个对象**赋值；外部只读，`private set` 保证只有加载流程能写。`SaveManager.Load` 成功后把它转交出去（`SaveManager.cs:171`）。 | `LoadContext.cs:26` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; private set; }` | 构造时注入的类型表。读档期间一切「编号 → 类型」的解析都通过它完成，所以它必须在 `Load` 之前已经 `FillWithCurrentTypes()` 过，否则所有对象都拿不到类型定义。 | `LoadContext.cs:31` |
| `Driver` | `public ISaveDriver Driver { get; private set; }` | 构造时注入的存档驱动，负责把存档拆成 `LoadData`（含 `GameData.Header` / `ObjectData[]` / `ContainerData[]` / `Strings` 等分片）。换驱动是替换存档格式与存放位置的唯一正规途径。 | `LoadContext.cs:36` |
| `Load` | `public bool Load(LoadData loadData, bool loadAsLateInitialize)` | 六阶段流水线本体：建头部表 → 造对象（id 0 = 根）→ 读字符串 → 解析引用 → 并行读对象数据 → 并行读容器数据；`loadAsLateInitialize` 为假时立刻跑初始化回调。全程 `try/catch`，**异常只打印并返回 false**。 | `LoadContext.cs:64` |
| `CreateLoadData` | `internal static ObjectLoadData CreateLoadData(LoadData loadData, int i, ObjectHeaderLoadData header)` | 单个对象的读取单元：从 `loadData.GameData.ObjectData[i]` 解出该对象的归档，取 `FolderId(i, SaveFolderExtension.Object)` 子目录，建 `ObjectLoadData` 后按 `InitializeReaders → FillCreatedObject → Read → FillObject` 依次推进。第 4、5 阶段都用它。 | `LoadContext.cs:49` |
| `CreateLoadCallbackInitializator` | `internal LoadCallbackInitializator CreateLoadCallbackInitializator(LoadData loadData)` | 把「三张头部表 + 对象计数」打包成初始化器，交给 `SaveManager` 在稍后阶段跑 `InitializeObjects` / `AfterInitializeObjects`。两阶段加载（`loadAsLateInitialize = true`）就是靠它把回调推迟到对象图完全就绪之后。 | `LoadContext.cs:261` |
| `LoadString` | `private static string LoadString(ArchiveDeserializer saveArchive, int id)` | 读单个字符串：定位到固定目录 `FolderId(-1, SaveFolderExtension.Strings)` 下编号为 `id` 的 `Txt` 条目再 `ReadString()`。**注意目录 id 固定是 -1**，与对象/容器分开存放，所以字符串有自己独立的编号空间。 | `LoadContext.cs:267` |
| `TryConvertType` | `public static bool TryConvertType(Type sourceType, Type targetType, ref object data)` | 跨版本类型兼容的尽力转换：数值 ↔ 数值走 `Convert.ChangeType`；数值 → `string` 时按整数/浮点分别用 `Convert.ToInt64` / `Convert.ToDouble`（浮点用 `InvariantCulture`，避免区域设置把小数点变成逗号）。**集合分支是空操作**（算出 `MBList<>` 判断后丢弃结果），最终返回 false。 | `LoadContext.cs:274` |
| `GetObjectWithId` | `public ObjectHeaderLoadData GetObjectWithId(int id)` | 从对象头部表按 id 取条目；`id == -1` 时返回 null（哨兵语义，不是「查不到」）。**越界 id 会直接抛数组越界**——表长度是加载时读出的 `_objectCount`。 | `LoadContext.cs:308` |
| `GetContainerWithId` | `public ContainerHeaderLoadData GetContainerWithId(int id)` | 容器头部表的同构查询，同样把 `-1` 当哨兵返回 null。 | `LoadContext.cs:319` |
| `GetStringWithId` | `public string GetStringWithId(int id)` | 字符串表的同构查询，`-1` 返回 null。字符串表在「Load Strings」阶段整体填好，所以此方法在 `Load` 返回前调用会拿到空串或 null。 | `LoadContext.cs:330` |
| `<TryConvertType>g__isInt\|25_0` | `internal static bool <TryConvertType>g__isInt\|25_0(Type type)` | `TryConvertType` 的编译器生成局部函数：判断类型是否为 `long/int/short/ulong/uint/ushort` 六个整型之一。名字里的 `g__` 前缀与 `|25_0` 后缀是 C# 局部函数在反编译产物里的形态。 | `LoadContext.cs:342` |
| `<TryConvertType>g__isFloat\|25_1` | `internal static bool <TryConvertType>g__isFloat\|25_1(Type type)` | 局部函数：判断是否为 `double/float`。它决定「数值 → 字符串」时用 `Convert.ToDouble` 还是 `Convert.ToInt64`。 | `LoadContext.cs:349` |
| `<TryConvertType>g__isNum\|25_2` | `internal static bool <TryConvertType>g__isNum\|25_2(Type type)` | 局部函数：`isInt || isFloat`，即「是不是数值类型」。`TryConvertType` 的第一段与第二段都用它做守卫。 | `LoadContext.cs:356` |

表外说明：构造函数不在上表，它只做三件事——存 `DefinitionContext`、把三张表置为 null、存 `Driver`。

## 真实示例

官方 `SaveManager.Load` 的完整调用形状（这是你唯一该用的入口）：

```csharp
// TaleWorlds.SaveSystem/SaveManager.cs:158-171（节选）
SaveManager._isLoading = true;
DefinitionContext definitionContext = new DefinitionContext();     // SaveManager.cs:158
definitionContext.FillWithCurrentTypes();
LoadData loadData = driver.Load(saveName);
SaveManager.OperatingVersion = loadData.MetaData.GetApplicationVersion();
LoadContext loadContext = new LoadContext(definitionContext, driver);   // SaveManager.cs:162
if (loadContext.Load(loadData, loadAsLateInitialize))                    // LoadContext.cs:64
{
    loadResult = LoadResult.CreateSuccessful(loadContext.RootObject,    // LoadContext.cs:26
        loadData.MetaData, loadCallbackInitializator);
}
```

`TryConvertType` 的真实分支结构（注意最后那段被丢弃的集合判断）：

```csharp
// TaleWorlds.SaveSystem/Load/LoadContext.cs:274 起
public static bool TryConvertType(Type sourceType, Type targetType, ref object data)
{
    if (isNum(sourceType) && isNum(targetType))            // LoadContext.cs:356
    {
        data = Convert.ChangeType(data, targetType);
        return true;
    }
    if (isNum(sourceType) && targetType == typeof(string))
    {
        data = isInt(sourceType)                            // LoadContext.cs:342
            ? Convert.ToInt64(data).ToString()
            : Convert.ToDouble(data).ToString(CultureInfo.InvariantCulture);
        return true;
    }
    if (sourceType.IsGenericType && targetType.IsGenericType)
    {
        targetType.GetGenericTypeDefinition() == typeof(MBList<>);  // ← 结果被丢弃，不是赋值
    }
    return false;                                           // ← 集合分支永远走到这里
}
```

把「编号 → 类型」和「id → 实例」两半接起来的写法：

```csharp
LoadContext ctx = new LoadContext(definitionContext, driver);   // SaveManager.cs:162
if (ctx.Load(loadData, false))                                  // LoadContext.cs:64
{
    ObjectHeaderLoadData header = ctx.GetObjectWithId(42);       // LoadContext.cs:308
    TypeDefinition def = ctx.DefinitionContext                  // LoadContext.cs:31
        .TryGetTypeDefinition(header.TypeId) as TypeDefinition;
    Debug.Print($"{def?.Type.Name} #{header.Id}");
}
```

## 参见

- [`../SaveManager`](../SaveManager) —— 唯一正规入口：构造本类型、调用 `Load`，并把 `RootObject` 包进 `LoadResult`。
- [`../DefinitionContext`](../DefinitionContext) —— 读档的另一半：本类型持有的类型表，负责「编号 → 类型」的解析。
- [`../ISaveDriver`](../ISaveDriver) —— 提供 `LoadData` 分片的驱动；换存档格式或存放位置就是换它。
- [`../../core-extra/Game`](../../core-extra/Game) —— 通常就是 id 0 的那个 `RootObject`。
- [`../_index`](../_index) —— `save-system` 桶全类型索引。

## 导航

- 同桶：[`../DefinitionContext`](../DefinitionContext) · [`../SaveContext`](../SaveContext) · [`../ISaveDriver`](../ISaveDriver)
- 父索引：[`../_index`](../_index)
