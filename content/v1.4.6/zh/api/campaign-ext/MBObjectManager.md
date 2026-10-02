---
title: "MBObjectManager"
description: "全局对象注册表：按类型与 StringId 登记所有 MBObjectBase 实例，负责 XML 定义加载、引用解析与读档重建。"
---
# MBObjectManager

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public sealed class MBObjectManager`
**Source:** `TaleWorlds.ObjectSystem/MBObjectManager.cs`

## 概述

`MBObjectManager` 是整个游戏的单一对象目录。所有 `MBObjectBase` 派生类——`Hero`、`Clan`、`Settlement`、`Faction`、`ItemObject`、`CharacterObject`、地图地点、装备模板——在创建后都要注册进它，战役代码才能通过 `StringId` 或 `MBGUID` 找到它们。它是 `sealed` 的单例：`Instance` 由 `Init()` 创建、`Destroy()` 置空，mod 不应该自己 `new`。

它承担四件事：按类型维护对象表（`RegisterType` / `RegisterObject` / `GetObject` / `GetObjectTypeList`）；把 XML 定义文件合并成对象（`LoadXML` / `CreateObjectFromXmlNode` / `CreateObject<T>`）；在读档时按 `MBGUID` 还原引用（`GetMBObject`、`ReadObjectReferenceFromXml`）；以及在战役结束时把没准备好的对象清掉（`UnregisterNonReadyObjects`、`ClearAllObjects`）。

它**不是**通用容器。把 mod 自己造的、且不是 `MBObjectBase` 派生的运行时对象塞进它不会成功——`RegisterObject<T>` 的泛型约束就卡死了这一点。

## 心智模型

启动顺序：`MBObjectManager.Init()` 建立空实例 → 各模块用 `RegisterType<T>(classPrefix, classListPrefix, typeId)` 登记类型（`typeId` 是存档里的类型编号，跨版本必须稳定）→ `LoadXML` 读入合并后的 XML → `CreateObjectFromXmlNode` 反射构造并调 `Deserialize` → `RegisterObject` 登记 → 游戏 tick。

读档时顺序反过来：保存系统按 `typeId` 找到类型记录 → 构造对象 → 用 `MBGUID` 调 `GetMBObject` 还原跨对象引用 → `MBObjectManager.PreAfterLoad()` 与 `AfterLoad()` 广播两段重建钩子。

常见误用有三类。一是**过早查询**：`GetObjectTypeList<Hero>()` 在 XML 加载完成前返回空列表；在 `OnGameStart` 里查通常是安全的，但放在更早的阶段就会静默拿到空集合。二是**用 `GetObject<T>(string)` 判存在**：它返回 `default(T)` 而不是抛异常，null 既可能表示「不存在」也可能表示「类型不匹配」，要先用 `ContainsObject<T>` 或 `GetObjectTypeList` 确认。三是**忘记 `RegisterObject`**：自定义 `MBObjectBase` 派生类不登记就永远查不到，而且没有任何警告。

## 关键成员

### 单例与生命周期

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Instance` | `public static MBObjectManager Instance { get; private set; }` | 全局单例。`private set` 意味着只有 `Init()` / `Destroy()` 能改。未初始化时为 null，直接访问会抛 `NullReferenceException` |
| `Init` | `public static MBObjectManager Init()` | 新建并替换 `Instance`，返回新实例。会丢弃旧实例上的一切登记，只在引擎启动阶段调用 |
| `Destroy` | `public void Destroy()` | `ClearAllObjects()` 后把 `Instance` 置 null。退出到主菜单或切换游戏时由引擎调用 |
| `NumRegisteredTypes` | `public int NumRegisteredTypes { get; }` | 已注册的类型记录数。底层表为 null 时返回 0 |
| `MaxRegisteredTypes` | `public int MaxRegisteredTypes { get; }` | 类型记录数上限。`RegisterType` 超过它会触发 `MBTooManyRegisteredTypesException` 断言 |
| `ReInitialize` | `public void ReInitialize()` | 重建内部类型记录表而不销毁单例引用，用于开发期的类型重载 |
| `ClearAllObjects` | `public void ClearAllObjects()` | 清空所有类型的全部对象实例 |
| `ClearAllObjectsWithType` | `public void ClearAllObjectsWithType(Type type)` | 只清空某个类型（及其派生兼容类型）的对象表 |
| `UnregisterNonReadyObjects` | `public void UnregisterNonReadyObjects()` | 丢弃所有未 `IsReady` 的对象。战役初始化结束后由 `CampaignGameStarter` 调用一次，用来清掉中途放弃创建的对象 |

### 类型与实例登记

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `RegisterType` | `public void RegisterType<T>(string classPrefix, string classListPrefix, uint typeId, bool autoCreateInstance = true, bool isTemporary = false) where T : MBObjectBase` | 登记一个可存储类型。`typeId` 进存档、跨版本必须稳定；`classPrefix` 是 XML 根元素名。`isTemporary: true` 的类型会在 `RemoveTemporaryTypes()` 时整类清掉 |
| `HasType<T>` | `public bool HasType<T>() where T : MBObjectBase` | 该泛型类型是否已登记。未登记就调 `GetObject` 系列会静默返回空 |
| `HasType` | `public bool HasType(Type type)` | 同上，按 `System.Type` 判断 |
| `FindRegisteredClassPrefix` | `public string FindRegisteredClassPrefix(Type type)` | 返回该类型登记时用的 XML 前缀；未登记返回 null |
| `FindRegisteredType` | `public Type FindRegisteredType(string classPrefix)` | 按 XML 前缀反查类型；未登记返回 null |
| `RegisterObject` | `public T RegisterObject<T>(T obj) where T : MBObjectBase` | 把已构造的实例登记进类型表，内部会调 `OnRegistered()`。返回类型转换后的同一引用；传 null 或重复 `StringId` 会触发相应异常 |
| `RegisterPresumedObject` | `public T RegisterPresumedObject<T>(T obj) where T : MBObjectBase` | 「假定存在」式登记：允许对象在正式初始化前先占位，稍后再补齐。读档流程用得多 |
| `UnregisterObject` | `public void UnregisterObject(MBObjectBase obj)` | 从表里移除实例并调 `OnUnregistered()`。移除后再被查到就是 null |
| `AddHandler` | `public void AddHandler(IObjectManagerHandler handler)` | 注册对象表变更监听器，用于在对象被创建/移除时得到通知 |
| `RemoveHandler` | `public void RemoveHandler(IObjectManagerHandler handler)` | 注销监听器。不移除会让回调在对象销毁后继续触发 |

### 查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetObject<T>` | `public T GetObject<T>(string objectName) where T : MBObjectBase` | 按 `StringId` 精确查找。找不到返回 `default(T)`；类型密封时走快速路径，否则按可赋值类型逐个表扫 |
| `GetObject<T>` | `public T GetObject<T>(Func<T, bool> predicate) where T : MBObjectBase` | 用自定义谓词扫全表，返回第一个命中的实例；没有命中返回 `default(T)`。每次调用都是 O(n) |
| `GetObjects<T>` | `public MBReadOnlyList<T> GetObjects<T>(Func<T, bool> predicate) where T : MBObjectBase` | 谓词筛选，返回只读列表快照而非活视图 |
| `GetObjectTypeList<T>` | `public MBReadOnlyList<T> GetObjectTypeList<T>() where T : MBObjectBase` | 取某类型的全部实例。这是 mod 里最常用的入口，返回的是只读包装，改它不会影响注册表 |
| `CreateObjectTypeList` | `public IList<MBObjectBase> CreateObjectTypeList(Type objectClassType)` | 同上但按运行时 `Type` 取，返回可写 `IList`。只有在需要 `Remove` 之类的操作时才有意义 |
| `GetFirstObject<T>` | `public T GetFirstObject<T>() where T : MBObjectBase` | 返回该类型表的任意一个实例，用于只想拿个样本做反射的场景 |
| `ContainsObject<T>` | `public bool ContainsObject<T>(string objectName) where T : MBObjectBase` | 判断某 `StringId` 在该类型下是否存在，语义比 `GetObject != null` 更明确 |
| `GetMBObject` | `public MBObjectBase GetMBObject(MBGUID objId)` | 按 GUID 取任意类型的对象。找不到时走 `Debug.FailedAssert` 并返回 null |
| `GetObject` | `public MBObjectBase GetObject(MBGUID objectId)` | 同 `GetMBObject` 的旧名实现：先用 `objectId.GetTypeIndex()` 定位类型记录，再在该记录内查找，失败时断言并返回 null |
| `GetObject` | `public MBObjectBase GetObject(string typeName, string objectName)` | 按「XML 类型前缀 + StringId」取对象，调试与工具场景用得多 |

### XML 定义与实例化

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `LoadXML` | `public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)` | 加载指定 ID 的 XML 定义并实例化全部对象。mod 加自定义实体类型时的主要入口 |
| `LoadXml` | `public void LoadXml(XmlDocument doc, bool isDevelopment = false)` | 直接从已加载的 `XmlDocument` 实例化，mod 在内存里拼 XML 后用它 |
| `LoadOneXmlFromFile` | `public void LoadOneXmlFromFile(string xmlPath, string xsdPath, bool skipValidation = false)` | 从单个文件路径加载定义并做 XSD 校验 |
| `LoadXMLFromFileSkipValidation` | `public XmlDocument LoadXMLFromFileSkipValidation(string xmlPath, string xsdPath)` | 只读文件不实例化，调试工具用 |
| `CreateObjectFromXmlNode` | `public MBObjectBase CreateObjectFromXmlNode(XmlNode node)` / `(XmlNode node, string typeName)` | 按节点上的类型信息反射构造对象并调 `Deserialize`。第二个重载显式给类型名 |
| `CreateObjectWithoutDeserialize` | `public MBObjectBase CreateObjectWithoutDeserialize(XmlNode node)` | 只构造不反序列化，用于读档路径 |
| `CreateObject<T>` | `public T CreateObject<T>(string stringId) where T : MBObjectBase, new()` | 构造并登记一个指定 `StringId` 的对象，不经过 XML |
| `CreateObject<T>` | `public T CreateObject<T>() where T : MBObjectBase, new()` | 同上，`StringId` 留空 |
| `ReadObjectReferenceFromXml<T>` | `public T ReadObjectReferenceFromXml<T>(string attributeName, XmlNode node) where T : MBObjectBase` | 从 XML 属性读出对某类型对象的引用（内部走 GUID 解析）。属性缺失时返回 null |
| `ReadObjectReferenceFromXml` | `public MBObjectBase ReadObjectReferenceFromXml(string attributeName, Type objectType, XmlNode node)` | 同上，类型在运行时决定 |
| `MergeElementAttributes` | `public static bool MergeElementAttributes(XElement element1, XElement element2)` | 静态工具：把 element2 的属性并入 element1，返回是否发生了修改 |
| `MergeElements` | `public static void MergeElements(XElement element1, XElement element2, string xsdPath)` | 按 XSD 校验后合并两个元素 |
| `GetMergedXmlForManaged` | `public static XmlDocument GetMergedXmlForManaged(string id, bool skipValidation, bool ignoreGameTypeInclusionCheck = true, string gameType = "")` | 取托管侧（`TaleWorlds.*`）的合并 XML 定义 |
| `GetMergedXmlForNative` | `public static XmlDocument GetMergedXmlForNative(string id, out List<string> usedPaths)` | 取 native 侧合并结果，并通过 `usedPaths` 回传用到的文件路径 |
| `CreateMergedXmlFile` | `public static XmlDocument CreateMergedXmlFile(List<Tuple<string, string>> toBeMerged, List<string> xsltList, bool skipValidation)` | 合并「(路径, XSLT)」列表，产出单一文档 |
| `ApplyXslt` | `public static XmlDocument ApplyXslt(string xsltPath, XmlDocument baseDocument)` | 对文档跑一次 XSLT 变换 |
| `MergeTwoXmls` | `public static XmlDocument MergeTwoXmls(XmlDocument xmlDocument1, XmlDocument xmlDocument2, string xsdPath, bool keepDuplicates)` | 合并两份文档，`keepDuplicates` 决定是否保留重复节点 |
| `ToXDocument` / `ToXmlDocument` | `public static XDocument ToXDocument(XmlDocument xml)` / `public static XmlDocument ToXmlDocument(XDocument xDocument)` | `System.Xml` 与 `System.Xml.Linq` 两套 DOM 之间的互转 |

### 读档与诊断

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `PreAfterLoad` | `public void PreAfterLoad()` | 读档第二段广播：此时字段已恢复但运行时索引还没重建 |
| `AfterLoad` | `public void AfterLoad()` | 读档第三段广播：适合在这里做跨对象引用的最终修复 |
| `RemoveTemporaryTypes` | `public void RemoveTemporaryTypes()` | 移除所有 `isTemporary: true` 注册的类型及其对象，编辑器与工具流程用 |
| `DebugPrint` | `public void DebugPrint(PrintOutputDelegate printOutput)` | 把内部状态逐行交给回调打印，不写日志文件 |
| `DebugDump` | `public string DebugDump()` | 返回一份完整的对象表文本快照 |
| `GetObjectTypeIds` | `public string GetObjectTypeIds()` | 返回「类型前缀 → typeId」的可读清单，核对存档兼容性时最有用 |

## 真实示例

```csharp
// 1. 按 StringId 取对象
Settlement capital = MBObjectManager.Instance.GetObject<Settlement>("empire_west_capital");
if (capital == null)
{
    Debug.Print("[MyMod] settlement id not found in merged XML");
    return;
}

// 2. 扫全表
MBReadOnlyList<Hero> livingLords = MBObjectManager.Instance.GetObjectTypeList<Hero>();
for (int i = 0; i < livingLords.Count; i++)
{
    Hero lord = livingLords[i];
    if (lord.IsActive && lord.Clan != null && lord.Clan.Tier >= 4)
    {
        lord.AddSkillXp(DefaultSkills.Leadership, 25f);
    }
}

// 3. 构造并登记自定义实体
public override void OnGameInitializationFinished()
{
    base.OnGameInitializationFinished();
    MBObjectManager.Instance.CreateObject<LedgerEntry>("my_ledger_001");
}

// 4. 读档广播里修跨对象引用
public override void AfterLoad()
{
    base.AfterLoad();
    if (Owner == null)
    {
        Owner = MBObjectManager.Instance.GetMBObject(OwnerId);
    }
}
```

自定义实体注册（放在模块初始化里）：

```csharp
MBObjectManager.Instance.RegisterType<LedgerEntry>(
    classPrefix: "ledger_entry",
    classListPrefix: "ledger_entries",
    typeId: 9001u);
```

`AddSkillXp` 的第一个参数是 `SkillObject` 而不是 `Skills` 静态类里的常量，1.4.6 里取它要写 `DefaultSkills.Leadership`；经验是 `float`。`typeId` 必须是稳定值：改它会让老存档里这一类的对象全部无法解析。`GetObjectTypeIds()` 可以在排查「我的存档打不开」时打印当前版本的全量编号表。

## 风险与边界

- **单例的空引用窗口**：`Instance` 在引擎启动前与 `Destroy()` 之后都是 null。任何 `MBObjectManager.Instance.X` 的静态访问都要考虑这个窗口；`Destroy()` 后继续持有 `Campaign.Current` 里的引用会读到已清空的对象。
- **注册即承诺存档兼容**：一旦 `RegisterType` 生效并进了存档，`typeId` 与 `classPrefix` 就是永久契约。mod 之间抢同一个 `typeId` 会在 `RegisterType` 时撞上 `MBTooManyRegisteredTypesException` 断言。
- **XML 加载早于一切**：在 `LoadXML` 完成前调 `GetObjectTypeList<T>()` 返回空列表而非 null，最容易被误判成「数据不存在」。
- **`GetObject` 系列返回 null 是常态**：三处失败路径（类型未注册、StringId 不存在、GUID 解析失败）都返回 `default(T)` / `null`，其中 GUID 路径还会触发一次断言。判定存在性优先用 `ContainsObject<T>`。
- **谓词查询是 O(n)**：`GetObject<T>(Func<...>)` 每次都全表扫描，在 `DailyTickEvent` 里逐帧调用会明显拖慢战役 tick。缓存到字典里并自己维护失效时机。
- **只读列表不是活视图**：`GetObjectTypeList<T>()` 返回 `MBReadOnlyList<T>`，它在内部表变化时的行为取决于实现。要长期持有索引请自己复制成数组或字典。
- **只管理 `MBObjectBase` 派生类**：`RegisterObject<T>` 的泛型约束会让其它类型编译不过；运行时 POCO 请用自己的容器。
- **无线程安全**：所有表都是普通集合，只在主线程的初始化与读档阶段访问。异步任务里查询会和加载流程竞争。
- **注销会断引用**：`UnregisterObject` 之后仍持有该实例的代码会看到一个 `IsReady` 恒为 false 的「僵尸」对象，所有查询都不会再返回它。

## 跨版本提示

`MBObjectManager` 在 1.3.0 的 treespec 中不存在该类型的历史页面记录（`bannerlord-1.3.0/` 下无 `TaleWorlds.ObjectSystem` 模块源码），1.3.15 起才有完整模块。1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.ObjectSystem/`，其 `RegisterType` 签名与 1.4.6 一致（`uint typeId`、`autoCreateInstance`、`isTemporary` 三个可选参数在两版都在）。跨版本唯一必须核对的是 `GetObjectTypeIds()` 的输出——官方类型编号可能重排。

## 依赖关系

- 基类：[MBObjectBase](../MBObjectBase) — 它管理的全部对象都继承这个类。
- 战役入口：[Campaign](../../campaign/Campaign) — 通过 `Campaign.Current.ObjectManager` 拿到这个单例。
- 典型实体：[Hero](../../campaign/Hero) 与 [Settlement](../../campaign/Settlement) — 最常被 `GetObject` / `GetObjectTypeList` 取用的两类。
- 键类型：`MBGUID` 与 `IObjectManagerHandler` 定义在同一模块的其它文件里。
- 存档执行方：[SaveManager](../../save-system/SaveManager) — 读档时的对象图恢复由它驱动，途中会回调本类的 `PreAfterLoad` / `AfterLoad`。
- 父级：[campaign-ext API 目录导览](../)