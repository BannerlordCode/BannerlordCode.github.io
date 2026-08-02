---
title: "MBObjectManager"
description: "Bannerlord 所有 MBObjectBase 派生类型的全局注册中心：负责类型的登记、对象的创建/查找/注销，以及 XML 定义与存档的加载顺序。"
---
# MBObjectManager

**Namespace:** TaleWorlds.ObjectSystem  
**Module:** TaleWorlds.ObjectSystem  
**Type:** `public sealed class MBObjectManager`  
**Base:** 无（直接继承 `System.Object`）  
**File:** `TaleWorlds.ObjectSystem/MBObjectManager.cs`

## 概述

`MBObjectManager` 是 Bannerlord 底层（Foundation 层）的**全局对象注册中心**。游戏里几乎所有带 `StringId` 的数据对象——`Hero`、`ItemObject`、`Settlement`、`CharacterObject`、`Clan`、`Kingdom`、`MobileParty` 等——都直接或间接派生自 `MBObjectBase`，而它们的实例全部集中登记在这个管理器里，按其具体类型分桶存放（`ObjectTypeRecord<T>`）。

它做四件事：

- **类型登记**：在游戏初始化阶段，通过 `RegisterType<T>` 把每种 `MBObjectBase` 派生类型登记进来，并分配一个 `uint` 类型的 `typeId`。这个 `typeId` 会编码进每个对象的 `MBGUID`，是存档里横向引用对象的凭据。
- **对象创建与注册**：`CreateObject<T>` 与 `RegisterObject<T>` 负责把一个新对象纳入管理（分配 `MBGUID`、`OnRegistered` 回调、`AfterCreateObject` 通知处理器）。
- **对象查找**：按 `StringId`（`GetObject<T>(string)`）、按 `MBGUID`（`GetObject(MBGUID)`）、按谓词过滤（`GetObject<T>(Func)`、`GetObjects<T>`）、或枚举全部（`GetObjectTypeList<T>`）。
- **加载与清理**：`LoadXML`/`LoadXml` 从 XML 定义里反序列化对象；`PreAfterLoad`/`AfterLoad`/`ReInitialize` 在存档读盘后让对象补全交叉引用；`ClearAllObjects`/`RemoveTemporaryTypes`/`UnregisterObject` 负责注销。

它是**单例**：通过静态属性 `MBObjectManager.Instance` 访问，由 `Game.CreateGame` / `Game.LoadSaveGame` 在启动时调用 `MBObjectManager.Init()` 创建。

## 心智模型

把 `MBObjectManager` 当成一张**「类型 → 对象字典」的全局索引表**来理解：

- 它的生命周期与一次游戏会话（新游戏或读档）绑定。`Init()` 创建它，`Destroy()` 清空并置 `Instance` 为 `null`。不要在会话中途手动 `new`——构造器是 `private`。
- **对象必须在登记了类型之后才能创建/查找**。`RegisterType<T>` 发生在 `Game` 的 `BeforeRegisterTypes` / `OnRegisterTypes` 阶段；如果某个 `MBObjectBase` 派生类型没有登记就调用 `GetObject` / `CreateObject`，会触发 `Debug.FailedAssert` 并返回 `null`（发布版不弹断言，直接返回 `null`），下游很容易 `NullReferenceException`。
- **跨存档读盘后，你手里持有的任何原始 C# 引用都会失效。** 读档时整个对象图会被重新反序列化（新实例、新 `MBGUID` 映射），旧引用指向的是已被丢弃的对象。正确做法是只保存 `StringId` 或 `MBGUID`，需要时用 `MBObjectManager.Instance.GetObject<T>(stringId)` 重新查。
- **`typeId`（`RegisterType` 的第三个参数）必须在跨版本间保持稳定。** 它写进了存档里每个对象的 `MBGUID`。一旦某个模块的 `typeId` 与其它模块冲突，或你在旧存档之后新增/调整了类型编号，读档时的类型索引就对不上，导致坏档或对象查不到。
- 不要把它当持久存储用：除了 `isTemporary: true` 的类型（如 `Hero`、`MobileParty`、`Clan`、`Kingdom`）会在 `RemoveTemporaryTypes` 时整体移除，`GetObjectTypeList<T>()` 返回的是实时的 `MBReadOnlyList<T>` 视图，遍历中途注销对象要小心。

## 如何获取 MBObjectManager

它是单例，通常直接取 `Instance`：

```csharp
// 全局单例；会话存在期间一定非 null
MBObjectManager objectManager = MBObjectManager.Instance;

// 启动时由引擎创建（来自 TaleWorlds.Core.Game）：
//   MBObjectManager objectManager = MBObjectManager.Init();
//   RegisterTypes(gameType, objectManager, gameManager);
// 类型登记正是在这里通过 objectManager.RegisterType<T>(...) 完成。

// 在 Campaign 代码里也能直接拿到：
MBObjectManager manager = Campaign.Current.ObjectManager; // 与 MBObjectManager.Instance 是同一实例
```

> 不要自己调用 `new MBObjectManager()`——构造器为 `private`，且 `Instance` 的 setter 也是 `private`，只有 `Init()` 能写入。

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Instance` | `MBObjectManager`（`static`） | 全局单例。会话未初始化（未调用 `Init()` 或已 `Destroy()`）时为 `null`。 |
| `NumRegisteredTypes` | `int` | 当前已登记类型的数量，即 `ObjectTypeRecords.Count`。未初始化时为 0。 |
| `MaxRegisteredTypes` | `int`（常量 256） | 类型数量硬上限。超过时 `RegisterType` 会 `Debug.FailedAssert`（抛 `MBTooManyRegisteredTypesException` 文本），但仍会把类型加进去。 |

## 主要方法

### 单例与生命周期

#### `public static MBObjectManager Init()`
创建新的 `MBObjectManager` 并写入 `Instance`（覆盖旧值，不沿用旧状态）。由 `Game.CreateGame` 和 `Game.LoadSaveGame` 在各自启动时调用。`Init()` 之后必须在登记完所有类型之前、或读档流程里调用 `ReInitialize()` 之前完成 `RegisterType<T>`。

```csharp
// 引擎内部流程（TaleWorlds.Core.Game.CreateGame）：
MBObjectManager objectManager = MBObjectManager.Init();
RegisterTypes(gameType, objectManager, gameManager); // 内部调用各 Game 的 OnRegisterTypes
```

#### `public void Destroy()`
先 `ClearAllObjects()` 注销所有对象，再把 `Instance` 置 `null`。会话结束时由引擎调用，不要在对象仍被引用时手动调用。

#### `public static bool MergeElementAttributes(XElement element1, XElement element2)`
（静态）把 `element2` 的属性合并到 `element1`，遇到 `_replaceWhileMerging="true"` 时先清空再覆盖。这是 XML 合并管线的一部分，mod 作者一般不直接调用。

---

### 类型登记

#### `public void RegisterType<T>(string classPrefix, string classListPrefix, uint typeId, bool autoCreateInstance = true, bool isTemporary = false) where T : MBObjectBase`
把类型 `T` 登记进管理器，内部新建一个 `ObjectTypeRecord<T>`。`classPrefix` 是 XML 元素名（如 `"Hero"`、`"Settlement"`），`classListPrefix` 是容器元素名（如 `"Heroes"`、`"Settlements"`），`typeId` 会作为该类型所有对象的 `MBGUID` 高 8 位类型索引——**必须与存档兼容且全局唯一**。`autoCreateInstance` 控制 XML 反序列化时遇到未知 `id` 是否自动补建占位对象；`isTemporary` 为 `true` 的类型会被 `RemoveTemporaryTypes` 在战役清理阶段整类移除。

```csharp
// 战役初始化时登记的真实片段（TaleWorlds.CampaignSystem.Campaign.OnRegisterTypes）：
objectManager.RegisterType<Settlement>("Settlement", "Settlements", 25u);
objectManager.RegisterType<Hero>("Hero", "Heroes", 32u, autoCreateInstance: true, isTemporary: true);
objectManager.RegisterType<MobileParty>("MobileParty", "MobileParties", 14u, autoCreateInstance: true, isTemporary: true);
```

#### `public bool HasType<T>() / public bool HasType(Type type)`
查询某类型是否已登记。`T` 是密封类时精确比较 `ObjectClass`，非密封时按 `IsAssignableFrom` 匹配派生类。

#### `public string FindRegisteredClassPrefix(Type type)`
返回某类型登记时的 `classPrefix`（XML 元素名）；未登记时 `FailedAssert` 并返回 `null`。

#### `public Type FindRegisteredType(string classPrefix)`
反向查找：由 XML 元素名得到对应的 `MBObjectBase` 派生类型；找不到时断言并返回 `null`。

---

### 创建与注册对象

#### `public T CreateObject<T>(string stringId) where T : MBObjectBase, new()`
新建一个 `T` 实例、设好 `StringId`、调用 `RegisterObject<T>` 纳入管理，并依次通知所有 `IObjectManagerHandler.AfterCreateObject`。返回的是**已注册**的那个实例（可能和传入的 `stringId` 不完全一致，见下方重复 id 处理）。

```csharp
// 战役开局创建玩家部队（TaleWorlds.CampaignSystem.Campaign.OnNewCampaignStart）：
MainParty = MBObjectManager.Instance.CreateObject<MobileParty>("player_party");
```

#### `public T CreateObject<T>() where T : MBObjectBase, new()`
不带 `id` 的重载，内部用 `typeof(T).Name + "_1"` 作为 `StringId`。

#### `public T RegisterObject<T>(T obj) where T : MBObjectBase`
把一个**已经存在**的 `T` 实例登记进管理器（分配 `MBGUID`、`IsReady = true`、`OnRegistered`）。与 `CreateObject` 的区别是它不负责 `new`，你先构造好对象再交给它。返回登记后的实例。

#### `public T RegisterPresumedObject<T>(T obj) where T : MBObjectBase`
以「占位（presumed）」方式登记：`IsReady` 保持 `false`，表示对象引用已存在但内容尚未补全。XML 反序列化交叉引用阶段大量使用此方式，等全部读完后由 `UnregisterNonReadyObjects` 把始终没补全的占位对象清除掉。

#### `public void UnregisterObject(MBObjectBase obj)`
从管理器注销对象：调用 `OnUnregistered`、从两本字典与列表中移除、并通知各 handler 的 `AfterUnregisterObject`。`obj` 为 `null` 时直接返回；类型未登记则 `FailedAssert`。

#### `internal void TryRegisterObjectWithoutInitialization(MBObjectBase obj)`
读档时由 `MBObjectBase.OnBeforeLoad` 调用，把已存在 `id` 的对象不加初始化地登记回去（重建 `MBGUID` → 实例 映射）。这是「按 `MBGUID` 重新定位存档引用」的关键一步。

---

### 查询与遍历

#### `public T GetObject<T>(string objectName) where T : MBObjectBase`
按 `StringId` 在该类型桶里精确查找；找不到返回 `null`（1.3.x 返回 `default(T)`，对引用类型同样是 `null`）。`T` 非密封时遍历所有派生类型桶逐个试。

```csharp
// 按 StringId 取物品（TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects.RandomEquipmentEffect）：
ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>(xmlAttribute.Value);
if (item != null) { /* 装备该物品 */ }
```

#### `public MBObjectBase GetObject(MBGUID objectId)`
按 `MBGUID` 查找：先用 `objectId.GetTypeIndex()` 定位类型桶，再查 `MBGUID` 字典。存档里保存的对象引用最终都靠它还原。`objectId` 的类型索引在 `ObjectTypeRecords` 中找不到时 `FailedAssert` 并返回 `null`。

#### `public T GetObject<T>(Func<T, bool> predicate) where T : MBObjectBase`
返回该类型桶里第一个满足谓词的对象；无匹配返回 `null`。

#### `public MBReadOnlyList<T> GetObjects<T>(Func<T, bool> predicate) where T : MBObjectBase`
返回该类型桶里**所有**满足条件的对象（新的 `MBList<T>`，不是实时视图）。

#### `public MBReadOnlyList<T> GetObjectTypeList<T>() where T : MBObjectBase`
返回该类型桶里**全部**对象的实时只读列表（密封类型是同一份 `RegisteredObjectsList` 引用，非密封类型是新合并的 `MBList`）。这是「遍历某类所有对象」的标准入口。

```csharp
// 遍历全部物品（TaleWorlds.MountAndBlade.Multiplayer.LobbyState）：
foreach (ItemObject item in (List<ItemObject>)(object)MBObjectManager.Instance.GetObjectTypeList<ItemObject>())
{
    // item.StringId / item.Name 等
}
```

#### `public T GetFirstObject<T>() where T : MBObjectBase`
取该类型桶的第一个对象（通常是 `RegisteredObjectsList[0]`）。

#### `public bool ContainsObject<T>(string objectName) where T : MBObjectBase`
判断某 `StringId` 是否已在该类型桶登记。

#### `public MBObjectBase GetObject(string typeName, string objectName)`
按 XML 元素名（`classPrefix`）+ `StringId` 查找，等价于先 `FindRegisteredType` 再按 `id` 查。

---

### 加载与序列化

#### `public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)`
合并并加载某个 XML 定义集（按 `id` 定位，如 `"Items"`、`"Settlements"`），内部调用 `GetMergedXmlForManaged` 把所有启用模块的对应 XML 与 XSLT 合并后交给 `LoadXml`。加载异常被吞掉。

#### `public void LoadXml(XmlDocument doc, bool isDevelopment = false)`
核心反序列化入口：扫描文档根节点，按 `classListPrefix` 匹配已登记类型，对每个子节点取 `id` 属性，经 `GetPresumedObject` 取得/补建占位对象，再 `Deserialize` + `AfterInitialized`。

#### `public MBObjectBase CreateObjectFromXmlNode(XmlNode node)` / `CreateObjectFromXmlNode(XmlNode node, string typeName)`
从单个 XML 节点补建一个对象并反序列化（带 `typeName` 重载用节点名或指定元素名定位类型）。

#### `public MBObjectBase CreateObjectWithoutDeserialize(XmlNode node)`
只 `Initialize` + `AfterInitialized`，不跑 `Deserialize`——用于只需要占位、无需填充字段的场景。

#### `public T ReadObjectReferenceFromXml<T>(string attributeName, XmlNode node) where T : MBObjectBase`
解析形如 `"Culture.empire"` 的跨对象引用：按 `.` 拆成 `类型前缀` + `对象 id`，用 `GetPresumedObject` 取对象（找不到且类型允许自动创建则补建占位）。属性缺失返回 `null`；格式不对（没有 `.`）抛 `MBInvalidReferenceException`。非泛型重载 `(string attributeName, Type objectType, XmlNode node)` 同理。

#### `public void PreAfterLoad()` / `public void AfterLoad()`
读档后由引擎依次调用：遍历所有类型桶，对每个对象触发 `PreAfterLoadInternal` / `AfterLoadInternal`，让对象在全部引用就位后补全交叉引用（例如 `Settlement` 链接其 `Town`/`Village` 组件，`Clan` 关联 `Kingdom`）。

#### `public void ReInitialize()`
读档流程（`Game.LoadSaveGame`）在 `loadResult.InitializeObjects()` 之后调用：重算每个类型桶的内部 `_objCount`（基于现有对象的最大 `SubId`），保证后续 `CreateObject` 不会复用已存在的 `MBGUID`。

#### `public void UnregisterNonReadyObjects()`
清理所有 `IsReady == false` 的占位对象，并在日志打印 `"Null object reference found with ID: " + StringId`。这是「某个对象被引用却从未真正定义」这一类坏档的典型报错来源。

---

### 清理

#### `public void ClearAllObjects()`
遍历全部类型桶，逐个 `UnregisterMBObject` + 通知 handler，最终回到空状态。`Destroy()` 会先调用它。

#### `public void ClearAllObjectsWithType(Type type)`
只清空某一类型桶（如战役结束时清掉所有临时类型）。

#### `public void RemoveTemporaryTypes()`
反向遍历 `ObjectTypeRecords`，把所有 `isTemporary: true` 的类型桶整体移除（先注销桶内每个对象，再删掉类型记录）。战役对象（`Hero`、`MobileParty`、`Clan`、`Kingdom`）都属于临时类型，新游戏开始时它们会被清掉重建。

---

### 诊断与扩展

#### `public void AddHandler(IObjectManagerHandler handler)` / `RemoveHandler(...)`
注册/移除一个 `IObjectManagerHandler`，在对象被创建（`AfterCreateObject`）和注销（`AfterUnregisterObject`）时收到回调。引擎内部用它同步缓存。

#### `public string DebugDump()`
把所有类型桶的对象清单写到 `mbobjectmanagerdump.txt` 并返回文本；`DebugPrint(PrintOutputDelegate)` 则把每类数量打印到给定输出（调试用）。

#### `public string GetObjectTypeIds()`
返回每行 `"<typeNo> - <record 类型全名>"` 的清单，用于排查 `typeId` 分配（跨模块冲突时很有用）。

## 典型用法示例

### 示例 1：按 StringId 查找一个已登记对象（最常见）

```csharp
// 取帝国文化对象；找不到时返回 null，必须判空
BasicCultureObject empire = MBObjectManager.Instance.GetObject<BasicCultureObject>("empire");
if (empire != null)
{
    // 用它来配兵、做判定等
}
```

### 示例 2：遍历某类型的全部对象

```csharp
// 统计/批量处理所有物品
MBReadOnlyList<ItemObject> allItems = MBObjectManager.Instance.GetObjectTypeList<ItemObject>();
foreach (ItemObject item in allItems)
{
    if (item.Value > 1000)
    {
        // 对高价物品做处理
    }
}
```

### 示例 3：在 OnRegisterTypes 中登记你自己的 MBObjectBase 派生类型

```csharp
// 在你的 Game 子类里重写（注意 typeId 必须稳定、且不要与其它模块冲突）：
protected override void OnRegisterTypes(MBObjectManager objectManager)
{
    base.OnRegisterTypes(objectManager);
    objectManager.RegisterType<MyCustomObject>("MyCustom", "MyCustoms", 200u);
}

// 之后即可创建与查找：
MyCustomObject obj = MBObjectManager.Instance.CreateObject<MyCustomObject>("my_custom_1");
MyCustomObject same = MBObjectManager.Instance.GetObject<MyCustomObject>("my_custom_1");
```

> 注意：`typeId`（上例的 `200u`）会写进对象的 `MBGUID`。如果你给一个新类型分配了一个与别的模块相撞的编号，或调整了已有类型的编号，已发布的旧存档读盘时类型索引错位，会出现坏档或对象查不到。

## 风险与崩溃边界

- **类型未登记就查找/创建**：`GetObject` / `CreateObject` / `RegisterObject` 在 `ObjectTypeRecords` 找不到对应类型时会 `Debug.FailedAssert` 并返回 `null`（发布版无断言）。随后对这些返回值解引用就是 `NullReferenceException`。务必保证类型在 `OnRegisterTypes` 阶段已登记。
- **跨存档持有原始引用失效**：读档后对象图被整体重建，你缓存的 `Hero` / `Settlement` 等字段变成悬空引用。只持久化 `StringId` 或 `MBGUID`，用 `GetObject<T>(stringId)` / `GetObject(mbGuid)` 重新取。`MBGUID` 在 `ReInitialize` 后能稳定定位，是更可靠的存档引用方式。
- **`typeId` 冲突 / 登记顺序变化导致坏档**：`MBGUID` 高 8 位即登记时的 `typeId`。`GetObject(MBGUID)` 用 `GetTypeIndex()` 反查类型桶，若 `typeId` 被改、被其他模块占用、或 `RegisterType` 次序改变导致类型错位，存档里的引用会落到错误类型或找不到对象。新增自定义类型时选一个与其它模块不冲突的编号，且不要在不同版本间变动。
- **重复 `StringId` 被静默改名**：同一类型桶内 `RegisterObject` 遇到已存在的 `StringId` 且不是同一实例、也不是占位，会自动在末尾追加自增数字（`GetIdParts` 拆分字母与数字后缀）。这不会抛异常，但会让你的 `StringId` 与预期不符，按原 `id` 再查会查不到——调试时务必打印实际 `StringId`。
- **`autoCreateInstance: false` 的类型被引用却缺失**：XML/存档里引用了一个本应存在、但类型登记时关闭了自动创建的对象，`GetPresumedObject` 会抛 `MBCanNotCreatePresumedObjectException`；若最终也没被任何定义补全，读盘末尾 `UnregisterNonReadyObjects` 会打印 `"Null object reference found with ID: ..."` 并注销它，下游交叉引用随之崩溃。
- **在错误阶段登记类型**：`RegisterType<T>` 只能在 `BeforeRegisterTypes` / `OnRegisterTypes`（或等效的初始化时机）调用。游戏跑起来之后再去登记新类型，已存在的对象图不会包含它，相关查找全部落空。
- **线程上下文**：`MBObjectManager` 及其类型桶都不是线程安全的，所有创建/查找/注销都在主线程（游戏逻辑线程）进行。在异步任务或后台线程里直接操作会触发数据竞争与不可预期崩溃。

## 跨版本提示

- v1.3.x 与 v1.4.5 之间，`MBObjectManager` 的公开 API **几乎无变化**：`Instance`、`Init`、`Destroy`、`RegisterType<T>`、`CreateObject<T>`、`RegisterObject<T>`、`GetObject` 系列、`GetObjectTypeList<T>`、`LoadXML`/`LoadXml`、`PreAfterLoad`/`AfterLoad`、`ClearAllObjects`、`RemoveTemporaryTypes`、`AddHandler` 在两个版本中签名与行为一致。
- 唯一的细微差异：`GetObject<T>(string)` 在 1.3.x 返回 `default(T)`（引用类型为 `null`），在 1.4.5 直接返回 `null`——对调用方而言等价，无需区分。
- `ObjectTypeRecord<T>.GetNewId()` 的自增实现两版本写法略有不同（1.4.5 用前置 `++`），但分配的 `MBGUID` 数值结果相同，存档兼容。
- 如果你要写跨 1.3.0 / 1.4.5 的 mod，本类可以直接复用代码；真正需要留意的是各 `RegisterType<T>` 的 `typeId` 是否与目标版本的基础游戏及其他模块保持一致。

## 参见

- [MBObjectBase](../MBObjectBase) — 所有登记对象的基类，详述 `StringId` / `MBGUID` / `IsReady` 等字段
- [../](/) — 本区域（campaign-ext）目录索引
- [../../core-extra/Game/](../../core-extra/Game/) — 调用 `MBObjectManager.Init()` 与 `RegisterTypes` 的上游入口
- [../../campaign/Campaign/](../../campaign/Campaign/) — 战役中登记 `Hero`/`Settlement`/`Clan` 等类型的实际位置
- [../../campaign/Hero/](../../campaign/Hero/) — 最常见的 `MBObjectBase` 派生类型之一
- [../../core/ItemObject/](../../core/ItemObject/) — 通过 `GetObject<ItemObject>(stringId)` 查找的典型例子
