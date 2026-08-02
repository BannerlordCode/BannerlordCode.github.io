---
title: "MBObjectBase"
description: "Bannerlord 中所有经 MBObjectManager 注册的游戏对象（Hero、ItemObject、Settlement、Clan 等）的公共基类：定义全局唯一 StringId、注册期分配的 MBGUID Id，以及序列化与注册生命周期的钩子。"
---
# MBObjectBase

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBObjectBase`
**Base:** 无
**File:** `TaleWorlds.ObjectSystem/MBObjectBase.cs`

## 概述

`MBObjectBase` 是 Foundation 层（`TaleWorlds.ObjectSystem`）对所有“可被注册、可被查找、可被存档”的游戏对象的抽象基类。战役世界里你能用 `StringId` 精确取到的东西——`Hero`、`ItemObject`、`Settlement`、`Clan`、`Kingdom`、`MobileParty`、`CharacterObject`——全都是它的子类。它本身几乎不持有业务数据，只定义了三件事：

- **身份**：`StringId`（字符串形式的全局唯一 ID）和 `Id`（`MBGUID` 形式的内部索引），前者是你写 XML、写代码时用来定位对象的钥匙，后者用于存档里表达对象间引用。
- **注册状态**：`IsRegistered`、`IsInitialized`、`IsReady` 三个由 `MBObjectManager` 在注册/反序列化流程中翻转的标志位。
- **生命周期钩子**：`Initialize` / `Deserialize` / `AfterRegister` / `OnBeforeLoad` / `PreAfterLoad` / `AfterLoad`，供子类在“从 XML 加载”“从存档恢复”“注册完成”这几个时刻填入自己的数据。

换句话说，`MBObjectBase` 决定了“一个对象怎样算是正式进入游戏世界、怎样被别人找到、怎样在存读档之间活下来”。

## 心智模型

把 `MBObjectBase` 及其子类理解为**“游戏世界里被登记在册的卡片”**，而 `MBObjectManager` 是存放这些卡片的中央名册：

- 你**不应该** `new` 一个 `MBObjectBase` 子类然后直接用。新对象必须经由 `MBObjectManager` 的 `RegisterObject` / `CreateObject` / `CreateObjectFromXmlNode` 登记，登记时引擎才会给它分配 `Id`、把它挂进对应类型的列表、并触发 `OnRegistered`。
- 取对象永远走 `MBObjectManager.Instance.GetObject<T>(stringId)` 或遍历列表，而不是自己维护字典。这样存读档之后你仍能拿到“同一个”对象（按 `StringId` 对齐）。
- 跨存读档时**不要长期持有对象引用**。一次游戏会话结束后所有对象都会被 `ClearAllObjects` 清空并重建；下次加载时哪怕 `Id` 大体稳定，加载顺序也可能变化。正确做法是每次需要时按 `StringId`（或必要时 `Id`）重新查询。
- 不要在运行时去改“共享模板”对象（如 `ItemObject`、`CharacterObject`）上本应全局一致的数据，除非你很清楚后果——它们通常只有一份实例，改动会影响所有引用者。
- 本类**没有** `SerializationId` 成员。任务里常误以为存在的这个属性在 1.3.15 / 1.4.5 源码中均不存在；对象的持久化身份就是 `StringId`。

## 如何获取 MBObjectBase 子类

`MBObjectBase` 自身不可实例化使用，获取其实例就是获取它的某个子类。统一入口是单例 `MBObjectManager.Instance`：

```csharp
var objectManager = MBObjectManager.Instance;

// 按 StringId 精确取（最常用）。取不到返回 null（引用类型）或 default(T)。
ItemObject twoHandedSword = objectManager.GetObject<ItemObject>("item_sword_1");

// 按条件取第一个 / 取全部
Hero richestLord = objectManager.GetObject<Hero>(h => h.IsLord && h.Gold > 100000);
MBReadOnlyList<Settlement> allSettlements = objectManager.GetObjects<Settlement>(s => s.IsTown);

// 遍历某类型的全部已注册对象
foreach (ItemObject item in objectManager.GetObjectTypeList<ItemObject>())
{
    // item.StringId、item.Name 等
}

// 取第一个（类型已注册时返回列表首项，否则 default）
Clan firstFaction = objectManager.GetFirstObject<Clan>();
```

从 XML 加载时引擎会自动创建并注册对象；你自己很少需要手动构造。若确实要在运行时新建一个可存档的自定义对象，用 `CreateObject<T>`（见下文示例），它会 `new` 出对象、赋 `StringId`、登记、并触发各 handler。

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `StringId` | `string` | 该对象的全局唯一字符串 ID（如 `"hero_derthert"`、`"item_sword_1"`）。`get/set` 均可写，且带 `[SaveableProperty(1)]`，会被存档。它是你写 XML、查对象、写跨对象引用的主键。**注意**：调用 `MBObjectManager.RegisterObject` 时若与已注册对象 `StringId` 冲突且非 presumed，引擎会强行把你的 `StringId` 末尾追加自增数字后重命名，因此你传入的 `StringId` 不一定等于最终生效值。 |
| `Id` | `MBGUID` | 注册时由 `MBObjectManager` 根据类型编号（`typeNo`）和递增计数器分配的内部索引，带 `[SaveableProperty(2)]`。`GetHashCode()` 直接返回 `Id.GetHashCode()`，所以同一会话内 `Id` 唯一即可作为哈希与相等判定的依据。它会被存档，但**不能保证跨版本、跨加载顺序稳定**，需稳定定位时优先用 `StringId`。 |
| `IsInitialized` | `bool` | 标记 `Initialize()` 是否已执行（或反序列化后由 `Deserialize` 调用 `Initialize`）。`[CachedData]`，`internal set`。 |
| `IsReady` | `bool` | 标记对象是否“就绪”（注册完成且已 `AfterInitialized`）。`[CachedData]`。`LoadXml` 流程里对象先被创建为 presumed（`IsReady=false`），`AfterInitialized` 在 `IsRegistered` 为真时才把它置 `true`；加载结束后 `UnregisterNonReadyObjects` 会清掉仍 `IsReady==false` 的悬空对象。 |
| `IsRegistered` | `bool` | 对象是否已被 `MBObjectManager` 登记。`[CachedData]` + `[SaveableProperty(3)]`，`private set`，由 `OnRegistered`/`OnUnregistered` 翻转。 |

> 性质说明：`StringId` 是逻辑身份，`Id` 是存储索引；`IsRegistered`/`IsInitialized`/`IsReady` 是 `MBObjectManager` 在生命周期中维护的瞬时状态（`[CachedData]` 表示不进入常规存档流程，但 `IsRegistered` 因为同时标了 `[SaveableProperty(3)]` 会被保存）。

## 主要方法

### 注册与初始化

#### `public void OnRegistered()`
在 `MBObjectManager.RegisterObject` 成功登记该对象后被调用：先把 `IsRegistered` 置 `true`，再调用虚方法 `AfterRegister()`。子类通常重写 `AfterRegister` 做“登记完成后才能做”的初始化（此时同类型其它对象多半也已存在）。

```csharp
// 引擎内部流程（示意）：登记成功后
obj.OnRegistered();   // -> IsRegistered = true; AfterRegister();
```

#### `public virtual void AfterRegister()`
空实现的生命周期钩子，子类重写以在对象正式入册后执行逻辑。不要在里面再调用 `MBObjectManager.RegisterObject` 登记别的同类型对象（会触发嵌套登记）。

#### `public virtual void Initialize()`
把 `IsInitialized` 置 `true`。基类不做其它事；子类可重写以设置默认字段。

#### `public void AfterInitialized()`
若 `IsRegistered` 为真，则把 `IsReady` 置 `true`。由 `MBObjectManager` 在 `Deserialize` 之后调用，标志对象可投入使用。

```csharp
// 来自 MBObjectManager.LoadXml 的真实调用顺序：
MBObjectBase obj = objectManager.GetPresumedObject(typeName, id, true); // 创建并登记（presumed）
obj.Deserialize(objectManager, xmlNode);  // -> Initialize()
obj.AfterInitialized();                   // -> IsReady = true（因为已注册）
```

### 反序列化（从 XML 加载）

#### `public virtual void Deserialize(MBObjectManager objectManager, XmlNode node)`
从模块 XML 还原对象数据。基类实现先调 `Initialize()`，再把 `StringId` 设为 `node.Attributes["id"].Value`。几乎所有子类都重写此方法，用 `objectManager.ReadObjectReferenceFromXml<T>(...)` 读取对其他对象的引用、用 `node.Attributes["..."]` / `node.SelectSingleNode(...)` 读取自身字段。

```csharp
// ItemObject 之类子类的典型写法（示意基类行为 + 子类扩展）：
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
{
    base.Deserialize(objectManager, node);          // 设置 StringId 并 Initialize
    string cultureId = node.Attributes["culture"]?.Value;
    CultureObject culture = objectManager.GetObject<CultureObject>(cultureId);
    // 读取本对象自己的字段……
}
```

#### `public MBObjectBase CreateObjectFromXmlNode(XmlNode node)` / `(XmlNode node, string typeName)`
`MBObjectManager` 上的便捷方法：按 `node.Name` 找到已登记的类型，用 `GetPresumedObject` 取得（或自动创建）实例，调用 `Deserialize` + `AfterInitialized` 后返回。多数 XML 加载路径最终都走这里。

#### `public T ReadObjectReferenceFromXml<T>(string attributeName, XmlNode node) where T : MBObjectBase`
从 XML 属性里读取“`类型前缀.对象id`”形式的对象引用（如 `"NPCCharacter.hero_derthert"`），返回对应已登记对象；属性缺失返回 `default(T)`，格式错误抛 `MBInvalidReferenceException`。这是子类 `Deserialize` 里解析跨对象引用的标准手段。

```csharp
// 在自定义子类的 Deserialize 中解析对某个 Hero 的引用
Hero owner = objectManager.ReadObjectReferenceFromXml<Hero>("owner", node);
if (owner != null)
{
    // 记录引用，但注意：读档时对方可能尚未加载，真正解引用放到 AfterLoad
}
```

### 存档恢复

#### `[LoadInitializationCallback] private void BeforeLoad()` → `protected virtual void OnBeforeLoad()`
带 `[LoadInitializationCallback]` 特性，存档加载、对象即将从二进制恢复前由保存系统调用。基类实现：若 `IsRegistered` 为真，则调 `MBObjectManager.Instance.TryRegisterObjectWithoutInitialization(this)`（不重置 `IsInitialized` 地把对象重新挂回名册），并把 `IsInitialized` 置 `true`。子类重写 `OnBeforeLoad` 做恢复前的预处理。

#### `public void PreAfterLoadInternal()` → `protected virtual void PreAfterLoad()`
`MBObjectManager.PreAfterLoad()` 在每种类型全部对象恢复后、统一调用。适合做“所有对象都已就位、但彼此引用尚未完全解析”时的工作。

#### `public void AfterLoadInternal()` → `protected virtual void AfterLoad()`
`MBObjectManager.AfterLoad()` 调用，发生在 `PreAfterLoad` 之后。**这是解析跨对象引用的正确位置**：此时其它对象都已从存档恢复，你可以安全地用 `StringId`/`Id` 通过 `MBObjectManager` 找回它们并赋值。

```csharp
// 子类典型：在 AfterLoad 里把“存档时只存了 id 的引用”还原成真实对象引用
protected override void AfterLoad()
{
    base.AfterLoad();
    if (_ownerId != null)
        _owner = MBObjectManager.Instance.GetObject<Hero>(_ownerId);
}
```

### 注销

#### `public void OnUnregistered()`
`MBObjectManager.UnregisterObject` 时调用，把 `IsRegistered` 置 `false`。`[CachedData]` 状态随即失效，对象从类型列表与 `Id` 字典中移除。

#### `public override int GetHashCode()`
返回 `Id.GetHashCode()`。因为同会话内 `Id` 唯一，可直接用于 `Dictionary`/`HashSet` 的键；跨会话不要依赖它做持久关联。

#### `public virtual TextObject GetName()`
返回 `new TextObject(StringId)`——即默认把 ID 当名字。子类（如 `Hero`、`ItemObject`）重写以返回本地化名称。

## 典型用法示例

### 示例 1：定义一个可存档的自定义对象并在运行时创建

```csharp
// 自定义子类：标 [SaveableField] 让字段进入存档；编号从 100 起，避免与基类 1/2/3 冲突
public class ClanReputation : MBObjectBase
{
    [SaveableField(100)]
    public int ReputationScore;

    [SaveableField(110)]
    public Hero Founder;
}

// 在合适的初始化点（如 CampaignBehaviorBase 的 OnNewGameCreated / 模块 starter）登记类型：
// typeId 必须 < 256 且在所有模块中唯一，autoCreate=false 表示必须显式创建
MBObjectManager.Instance.RegisterType<ClanReputation>("clan_rep", "ClanReputations", 200U, false, false);

// 运行时新建并用 StringId 定位：
ClanReputation rec = MBObjectManager.Instance.CreateObject<ClanReputation>("clanrep_player");
rec.ReputationScore = 50;
rec.Founder = Hero.MainHero;

// 之后随时按 ID 取回（即便经过读档，只要 StringId 一致）：
ClanReputation same = MBObjectManager.Instance.GetObject<ClanReputation>("clanrep_player");
```

> 要让 `[SaveableField]` 真正写入存档，还需为该类型提供一个 `SaveableTypeDefiner`（向保存系统声明类型与字段布局）。仅标 `[SaveableField]` 而不注册 definer，字段不会持久化。

### 示例 2：遍历全部物品对象做批量处理

```csharp
MBReadOnlyList<ItemObject> allItems = MBObjectManager.Instance.GetObjectTypeList<ItemObject>();
foreach (ItemObject item in allItems)
{
    if (item.IsReady && item.Value > 10000)
    {
        // 对高价值物品做点什么
    }
}
```

### 示例 3：在 Deserialize 中解析跨对象引用，并在 AfterLoad 中还原

```csharp
public class QuestGiver : MBObjectBase
{
    [SaveableField(100)]
    private string _linkedHeroId;          // 存档时只存 ID

    private Hero _linkedHero;              // 运行时引用，不存档

    public override void Deserialize(MBObjectManager objectManager, XmlNode node)
    {
        base.Deserialize(objectManager, node);
        _linkedHeroId = node.Attributes["linked_hero"]?.Value;
    }

    protected override void AfterLoad()
    {
        base.AfterLoad();
        if (_linkedHeroId != null)
            _linkedHero = MBObjectManager.Instance.GetObject<Hero>(_linkedHeroId);
    }
}
```

## 风险与崩溃边界

- **`StringId` 冲突被静默重命名**：`MBObjectManager.RegisterObject` 遇到同类型同 `StringId` 且非 presumed 的对象时，会把它末尾追加数字后重命名并继续注册。结果就是“你以为的对象 ID”和实际 ID 不一致，后续 `GetObject` 用原始 ID 会取不到。给自定义对象加模块前缀（如 `"my_mod_xxx"`）可避免与官方/其它模组撞车。
- **`SerializationId` 不存在**：不要在任何代码或 XML 里引用 `SerializationId`——`MBObjectBase` 在两个版本里都没有这个成员，持久身份就是 `StringId`。误用会导致编译/反射失败。
- **跨存读档持有引用**：会话结束后对象被 `ClearAllObjects` 销毁重建，旧的托管引用会变成悬空对象。始终按 `StringId`（首选）或 `Id` 在需要时重新查询；把需要持久化的关联存成 ID 字符串，在 `AfterLoad` 里还原。
- **`Id` 不是稳定身份**：它由“类型编号 + 递增计数”构成并随加载顺序可能变化，仅会话内唯一。用它做存档键或跨版本关联不可靠。
- **误改共享模板**：`ItemObject`、`CharacterObject` 等模板对象通常全游戏只有一份实例，直接改其字段会波及所有引用者。要存每实例数据请用 `[SaveableField]` 扩到自己的子类，不要污染模板。
- **`[SaveableField]`/`[SaveableProperty]` 编号冲突导致存档损坏**：编号在同一类型的可存档结构里必须唯一，且与基类占用的 `1`/`2`/`3` 以及引擎其它保留号错开（惯例从 `100` 起）。两个模组给各自类型用了相同编号不会互相干扰（类型隔离），但若同一类型内重复编号，保存系统会把字段映射错乱，轻则数据错位、重则读档崩溃。同时别忘了配 `SaveableTypeDefiner`。
- **未登记就使用**：对象只有经过 `RegisterObject`/`CreateObject` 等登记后 `IsRegistered` 才为真，`AfterInitialized` 才会把 `IsReady` 置真；未登记对象在 `UnregisterNonReadyObjects` 阶段会被当作悬空对象清理掉。

## 跨版本提示

- **v1.3.15 与 v1.4.5**：`MBObjectBase` 类本身在两个版本间基本一致，成员、`[SaveableProperty]` 编号（`StringId=1`、`Id=2`、`IsRegistered=3`）、构造函数与生命周期钩子均相同；`MBObjectManager.RegisterType<T>` 的签名与语义也稳定。写法可放心跨这两个版本复用。
- **`SerializationId`**：在 1.3.15 与 1.4.5 中均不存在，请勿依赖。
- **更早的 v1.3.0**：本次未对照源码；如需支持，请确认 `AfterLoad`/`OnBeforeLoad` 等钩子与 save 回调特性（`[LoadInitializationCallback]`）在该版本已具备，再据此调整。

## 参见

- [MBObjectManager](../MBObjectManager) — 登记、查询、注销所有 `MBObjectBase` 子类的中央名册
- [CampaignBehaviorBase](../CampaignBehaviorBase) — 在战役 tick 中操作已注册对象的典型场所
- [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) — 让你的 `[SaveableField]` 真正进入存档
- [Hero](../../campaign/Hero/) — 最常被子类化引用的 `MBObjectBase` 实例
- [ItemObject](../../core/ItemObject/) — 另一个典型子类，注意其共享模板语义
- [Campaign](../../campaign/Campaign/) — 战役对象类型的登记发生在 `Campaign.OnRegisterTypes`
- [本区域目录](../)
