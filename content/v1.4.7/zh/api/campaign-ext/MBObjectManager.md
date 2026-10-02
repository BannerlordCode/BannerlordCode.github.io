---
title: "MBObjectManager"
description: "MBObject 运行时对象注册表：负责类型注册、XML 加载与合并、对象实例的注册 / 注销 / 按名与 GUID 查找。它是 TaleWorlds.ObjectSystem 的唯一门面，也是自定义 XML 数据接入游戏的标准路径。"
---
# MBObjectManager

**命名空间：** `TaleWorlds.ObjectSystem`
**模块：** `TaleWorlds.ObjectSystem`
**类型：** `public sealed class MBObjectManager`
**基类：** 无
**源文件：** `TaleWorlds.ObjectSystem/MBObjectManager.cs`（声明见第 18 行）

## 概述

`MBObjectManager` 是 TaleWorlds 对象系统的运行时注册表。游戏里几乎所有「静态定义型」数据——兵种树、装备、制作配方、技能、特质、道具、以及所有 mod 的 XML 数据——都被建模成 `MBObjectBase` 的子类，由它统一管理生命周期。它承担四类职责：**类型注册**（`RegisterType<T>` 决定某个 `MBObjectBase` 子类如何从 XML 反序列化）、**XML 加载与合并**（`LoadXML`、`MergeTwoXmls`、XSLT 变换，把 mod 的 XML 叠加到本体 XML 上）、**实例管理**（`RegisterObject` / `UnregisterObject` / `GetObject` 系列）、以及**调试导出**（`DebugPrint`、`DebugDump`）。

它是 `sealed` 的，全局单例通过静态 `Instance` 访问。`Game` 在启动时调用 `MBObjectManager.Init()` 创建它，随后由 `GameType.OnRegisterTypes`（战役 / 战役扩展 / 剧情模式各自实现）填充类型，最后 `LoadXML` 读入数据。mod 想加自己的数据，走的也是同一条路：在 `MBSubModuleBase.RegisterSubModuleTypes()` 或 `OnRegisterTypes` 里 `RegisterType<T>`，然后提供 XML。

有一组**静态 XML 工具方法**（`MergeElementAttributes`、`MergeTwoXmls`、`ApplyXslt`、`GetMergedXmlForManaged`、`GetMergedXmlForNative`）是 mod 调试 XML 覆盖问题的关键工具——它们能告诉你「本体 XML 与 mod XML 合并后到底是什么样子」。

## 心智模型

把 `MBObjectManager` 想成**一张双向表**：类型侧（classPrefix → 运行时 Type）和实例侧（StringId / MBGUID → 实例）。模组的正确调用顺序是：

1. **先注册类型，再加载 XML，最后取实例。** 顺序错了就是 `CreateObjectFromXmlNode` 返回 null 或 `HasType<T>()` 为 false。`RegisterType<T>` 发生在 `OnRegisterTypes` 阶段，XML 加载在其后。
2. **取实例用 `GetObject<T>(string objectName)`**，这是 99% 场景的答案。`GetObject<T>(Func<T,bool>)` 用于按条件查找，代价是线性扫描——不要放进每帧路径。
3. **跨语言/跨 XML 取值用 `GetObject(string typeName, string objectName)`**（按注册的 classPrefix）或 `GetObject(MBGUID)`（按 GUID）。
4. **临时对象要用 `RegisterPresumedObject<T>` 而不是 `RegisterObject<T>`。** 前者注册为临时类型，`RemoveTemporaryTypes()` 会把它们整体清掉；后者是永久注册，需要自己 `UnregisterObject`。动态生成的对象（例如运行时合成的装备）用错会导致对象泄漏或被提前清掉。
5. **`Destroy()` 之后 `Instance` 失效。** 换战役 / 重开一局时不要缓存 `MBObjectManager.Instance` 到静态字段。

最容易踩的坑是**XML 合并**。mod 的 XML 是叠加在本体 XML 上的，同名节点的属性会被覆盖或按 `MergeElementAttributes` 的规则合并；属性名拼错不会报错，只会静默不生效。排查这类问题用 `GetMergedXmlForManaged` 把合并结果导出来看。

## 何时使用 / 何时不要使用

- **使用**：注册自定义 `MBObjectBase` 子类，使它能从 XML 反序列化。
- **使用**：按 StringId / GUID / 条件查找已加载的对象。
- **使用**：动态创建临时对象（`CreateObject<T>()` + `RegisterPresumedObject<T>`）。
- **使用**：合并与调试 XML —— `MergeTwoXmls`、`GetMergedXmlForManaged`、`DebugDump`。
- **不要**：在存档 / 读档路径上调用 `RegisterObject` / `UnregisterObject` —— MBObject 的注册表不是存档状态，读档后会被 `ReInitialize` 重建。
- **不要**：在每帧逻辑里用 `GetObject<T>(Func<...>)`；缓存结果。
- **不要**：在 `Destroy()` 之后再访问 `MBObjectManager.Instance`。

## 成员说明

### 一、生命周期与单例

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static MBObjectManager Instance { get; private set; }` | 全局单例。由 `Init()` 创建，`Destroy()` 后失效。**不要静态缓存**。 |
| `static MBObjectManager Init()` | 创建并设置单例。引擎在启动早期调用，mod 一般不重复调用。 |
| `void Destroy()` | 销毁并清空整个注册表。战役切换 / 游戏退出时调用。此后所有 `Instance` 访问都会失败。 |
| `void ReInitialize()` | 重新初始化注册表（保留部分注册状态）。读档后用于恢复。 |
| `void PreAfterLoad()` / `void AfterLoad()` | 读档的两阶段回调：反序列化完成后分别调用。用于把关联对象重新接上。 |

### 二、类型注册

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void RegisterType<T>(string classPrefix, string classListPrefix, uint typeId, bool autoCreateInstance = true, bool isTemporary = false) where T : MBObjectBase` | 核心注册。`classPrefix` 是 XML 里单个对象的标签名，`classListPrefix` 是列表容器的标签名，`typeId` 是存档用的类型编号。`isTemporary = true` 的类型会被 `RemoveTemporaryTypes()` 整体清除。 |
| `bool HasType<T>()` / `bool HasType(Type type)` | 查询某类型是否已注册。**在 `OnRegisterTypes` 早期判断最有用**。 |
| `string FindRegisteredClassPrefix(Type type)` | 由运行时类型反查 XML 标签名。写自定义 XML 工具时需要。 |
| `Type FindRegisteredType(string classPrefix)` | 由 XML 标签名反查运行时类型。处理未知标签时用它做分发。 |
| `string GetObjectTypeIds()` | 返回所有已注册类型的 ID 列表（调试 / 存档诊断用）。 |

### 三、实例注册与注销

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `T RegisterObject<T>(T obj)` | 永久注册一个实例。用它注册的实例**必须**由你负责 `UnregisterObject`，否则泄漏。 |
| `T RegisterPresumedObject<T>(T obj)` | 注册为临时实例，随 `RemoveTemporaryTypes()` 整体清除。动态生成对象的标准做法。 |
| `void UnregisterObject(MBObjectBase obj)` | 注销。已注册的对象被注销后，指向它的引用会变成「悬空 MBObjectBase」。 |
| `void RemoveTemporaryTypes()` | 清除所有临时类型与临时实例。引擎在场景切换 / 战役重建时调用。 |
| `void UnregisterNonReadyObjects()` | 移除尚未 `IsReady` 的对象。启动收尾阶段用。 |
| `void ClearAllObjects()` / `void ClearAllObjectsWithType(Type type)` | 清空全部 / 指定类型的实例。测试与热重载用。 |
| `T CreateObject<T>(string stringId)` / `T CreateObject<T>()` | 创建一个 `MBObjectBase` 实例。必须配合 `RegisterPresumedObject` 才会进注册表。 |

### 四、按条件 / 按名查找

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `T GetObject<T>(string objectName)` | **最常用**。按 StringId 取单个对象，不存在返回 `null`。 |
| `T GetObject<T>(Func<T, bool> predicate)` | 按条件取第一个匹配。线性扫描，热路径要缓存。 |
| `MBReadOnlyList<T> GetObjects<T>(Func<T, bool> predicate)` | 按条件取全部匹配。 |
| `T GetFirstObject<T>()` | 取该类型的第一个已注册对象。 |
| `bool ContainsObject<T>(string objectName)` | 判断对象是否存在，**不抛异常也不返回 null**，适合做前置校验。 |
| `MBObjectBase GetObject(MBGUID objectId)` | 按运行时 GUID 取对象。存档引用解析走这条路径。 |
| `MBObjectBase GetObject(string typeName, string objectName)` | 按 XML 标签名 + StringId 取，跨模块按字符串查找时用。 |
| `MBReadOnlyList<T> GetObjectTypeList<T>()` | 取某类型的全部实例。**返回值是活视图**，遍历时新增 / 注销会抛异常。 |
| `IList<MBObjectBase> CreateObjectTypeList(Type objectClassType)` | 构造一个指定类型的列表（供外部筛选使用）。 |
| `MBObjectBase GetMBObject(MBGUID objId)` | 低层取对象入口，返回基类型。 |

### 五、XML 加载与合并

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)` | 加载一整套 XML（按 `id` 定位文件）。mod 的 `Module.xml` 数据入口。 |
| `void LoadXml(XmlDocument doc, bool isDevelopment = false)` | 从已加载的 `XmlDocument` 反序列化对象。 |
| `void LoadOneXmlFromFile(string xmlPath, string xsdPath, bool skipValidation = false)` | 从单个文件加载并做 XSD 校验。**校验失败会抛异常**，这是 mod 数据写错时最直接的报错来源。 |
| `XmlDocument LoadXMLFromFileSkipValidation(string xmlPath, string xsdPath)` | 跳过 XSD 校验加载。开发期定位问题用。 |
| `XmlDocument LoadOneXmlFromFile` 对应的 `CreateObjectFromXmlNode(XmlNode node)` / `(XmlNode, string typeName)` / `CreateObjectWithoutDeserialize(XmlNode)` | 从 XML 节点创建对象实例。自定义加载流程用。 |
| `T ReadObjectReferenceFromXml<T>(string attributeName, XmlNode node)` / `ReadObjectReferenceFromXml(string attributeName, Type objectType, XmlNode node)` | 从 XML 属性读取对另一个 MBObject 的引用。**属性名写错会静默得到 null**，是 mod 数据不生效的常见原因。 |

### 六、静态 XML 工具（合并与调试）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static bool MergeElementAttributes(XElement element1, XElement element2)` | 把 `element2` 的属性合并进 `element1`。同名属性的覆盖规则由实现决定。 |
| `static void MergeElements(XElement element1, XElement element2, string xsdPath)` | 递归合并元素。 |
| `static XmlDocument GetMergedXmlForManaged(string id, bool skipValidation, bool ignoreGameTypeInclusionCheck = true, string gameType = "")` | 取得「本体 + mod」合并后的托管侧 XML。**排查 mod 数据为什么没生效的第一工具**。 |
| `static XmlDocument GetMergedXmlForNative(string id, out List<string> usedPaths)` | 同上，native 侧版本。`usedPaths` 会告诉你哪些文件参与了合并。 |
| `static XmlDocument CreateMergedXmlFile(List<Tuple<string, string>> toBeMerged, List<string> xsltList, bool skipValidation)` | 按列表合并多个文件并应用 XSLT。 |
| `static XmlDocument MergeTwoXmls(XmlDocument xmlDocument1, XmlDocument xmlDocument2, string xsdPath, bool keepDuplicates)` | 合并两份 XML。`keepDuplicates` 决定同名节点是覆盖还是都保留。 |
| `static XmlDocument ApplyXslt(string xsltPath, XmlDocument baseDocument)` | 应用 XSLT 变换。mod 做数据派生时用。 |
| `static XDocument ToXDocument(XmlDocument)` / `static XmlDocument ToXmlDocument(XDocument)` | 两种 XML DOM 之间的转换。 |

### 七、调试与扩展点

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void DebugPrint(PrintOutputDelegate printOutput)` | 遍历并打印全部已注册对象。通过回调输出，不写控制台。 |
| `string DebugDump()` | 返回完整注册表的字符串转储。 |
| `void AddHandler(IObjectManagerHandler handler)` / `void RemoveHandler(IObjectManagerHandler handler)` | 注册 / 注销对象管理器观察者。对象注册 / 注销时被通知。 |

## 示例

### 示例 1：注册自定义 MBObject 类型并按名取用

类型注册必须在 `OnRegisterTypes` / `RegisterSubModuleTypes` 阶段，取对象则在 XML 加载完成之后。

```csharp
using TaleWorlds.ObjectSystem;

// 1) 注册类型：classPrefix 是 XML 标签名，typeId 是存档类型编号
Game.Current.ObjectManager.RegisterType<MyItemDef>("MyItemDef", "MyItemDefs", 9001u);

// 2) XML 加载完成后按 StringId 取对象（不存在返回 null）
MyItemDef def = Game.Current.ObjectManager.GetObject<MyItemDef>("my_item_def_01");
if (def != null)
{
    // def 继承 MBObjectBase，可用 GetName() / Id / StringId
}

// 3) 前置校验用 ContainsObject，不抛异常
bool exists = Game.Current.ObjectManager.ContainsObject<MyItemDef>("my_item_def_01");
```

### 示例 2：动态创建临时对象

运行时生成的对象用 `RegisterPresumedObject`，否则会泄漏或被 `RemoveTemporaryTypes` 误清。

```csharp
using TaleWorlds.ObjectSystem;

MBObjectManager mgr = MBObjectManager.Instance;

// 创建 + 注册为临时实例
var custom = mgr.CreateObject<MyTempDef>("runtime_generated_01");
mgr.RegisterPresumedObject<MyTempDef>(custom);

// 查全量列表时先 ContainsObject，避免 null
if (mgr.ContainsObject<MyTempDef>("runtime_generated_01"))
{
    // 引擎在场景切换时会调用 RemoveTemporaryTypes()，把它连同临时类型一起清掉
}
```

### 示例 3：调试 XML 合并问题

mod 数据「不生效」时，先看合并后的 XML 长什么样。

```csharp
using System.Collections.Generic;
using System.Xml;
using TaleWorlds.ObjectSystem;

// 把本体 + mod 合并后的 XML 拿下来检查
XmlDocument merged = MBObjectManager.GetMergedXmlForManaged("Items", true);
if (merged == null)
{
    // id 拼错或该文件不存在
    return;
}

// native 侧会告诉你哪些文件参与了合并
List<string> usedPaths;
XmlDocument nativeSide = MBObjectManager.GetMergedXmlForNative("Items", out usedPaths);
foreach (string p in usedPaths)
{
    // p 就是一个 mod 的数据文件路径
}

// 逐行打印，看你的节点是不是被同名节点覆盖了
foreach (XmlNode node in merged.DocumentElement.ChildNodes)
{
    MBObjectManager.Instance.DebugPrint(line => { });
}
```

## 风险与边界

- **`Instance` 的生命周期**。`Destroy()` 后单例失效。静态字段缓存 `MBObjectManager.Instance` 会在第二局游戏时指向已销毁对象——和缓存 `Campaign.Current` 是同一类错误。
- **`GetObjectTypeList<T>()` 返回活视图**。遍历时调用 `RegisterObject` / `UnregisterObject` 会抛集合修改异常。
- **按条件查找是 O(n)**。`GetObject<T>(Func<...>)` 与 `GetObjects<T>(Func<...>)` 在大类型集（兵种、装备）上很贵，务必缓存。
- **XSD 校验会抛异常**。`LoadOneXmlFromFile` 的 `skipValidation` 默认 false，数据结构写错时会在加载阶段抛，而不是静默失败——这是好事，但意味着**mod 的坏 XML 会让整个游戏加载失败**。
- **XML 覆盖是静默的**。同名节点 / 属性被覆盖时没有任何日志。调试必须用 `GetMergedXmlForManaged`。
- **`ReadObjectReferenceFromXml` 拼错属性名返回 null**，不报错。跨对象引用（一个定义指向另一个定义）出问题时先查属性名。
- **`RegisterType` 的 `typeId` 冲突**：两个类型用同一个 `typeId` 会让存档解析错乱，且只在读档时才暴露。mod 应选一个不与本体冲突的高位编号。
- **存档不保存注册表**。MBObject 的注册与实例化发生在加载阶段，读档时由 XML 重建。往注册表里塞运行时状态是无效的。
- **单线程 + 原生互操作**。`LoadXML` 与 native 侧加载会触碰底层资源系统，只允许在主线程的启动流程里调用；`GetMergedXmlForNative` 走 native 桥接，在某些平台上有额外的加载开销。

## 依赖关系

- 上游 / 提供者：
  - [Game](../../core-extra/Game) 在启动时调用 `Init()` 并持有 `ObjectManager`，读档走 `LoadSaveGame`。
  - [MBObjectBase](../MBObjectBase) 是本管理器管理的全部对象类型的基类，`Deserialize` 回调由它发起。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 的 `RegisterSubModuleTypes()` / `OnRegisterTypes` 是类型注册的标准时机。
- 相互 / 下游：
  - [Campaign](../../campaign/Campaign) 通过 `OnRegisterTypes(MBObjectManager)` 与 `BeforeRegisterTypes` 把战役层类型接进来。
  - 存档侧经 [SaveManager](../../save-system/SaveManager) / [SaveContext](../../save-system/SaveContext) / [LoadContext](../../save-system/LoadContext) 解析 MBObject 引用。
  - UI 与调试侧经 [MBDebug](../../engine/MBDebug) 输出诊断信息。

## 参见

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 相关：[MBObjectBase](../MBObjectBase) · [Game](../../core-extra/Game) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Campaign](../../campaign/Campaign) · [MBDebug](../../engine/MBDebug)