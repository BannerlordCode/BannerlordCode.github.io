---
title: "CampaignObjectManager"
description: "战役对象的分类列表与精确类型查找入口；不等同于全局 MBObjectManager。"
---
# CampaignObjectManager

**Namespace:** `TaleWorlds.CampaignSystem`<br>
**Module:** `TaleWorlds.CampaignSystem`<br>
**Type:** `public class CampaignObjectManager`<br>
**Base:** 无<br>
**Source:** `TaleWorlds.CampaignSystem/CampaignObjectManager.cs`（1.3.15）<br>
**Owner:** [`Campaign`](../../campaign/Campaign)

## 一句话职责

`CampaignObjectManager` 维护战役运行时的 `Hero`、`Clan`、`Kingdom`、`MobileParty` 注册集合，并给这些集合提供按 ID、谓词和唯一字符串 ID 的读取/协调入口；它不是所有 `MBObjectBase` 的通用注册表。

## 心智模型

把它看成 `Campaign` 持有的“战役对象索引”，而不是可随意 `new` 的服务：

1. `_objects` 内部数组只登记四种精确类型：`Hero`、`Clan`、`Kingdom`、`MobileParty`。公开的 `Find<T>`、`FindFirst<T>`、`FindAll<T>` 和 `FindNextUniqueStringId<T>` 都先按 `typeof(T)` 精确匹配，因此 `Find<MBObjectBase>` 不会把这些子类合并返回。
2. `Settlements` 是独立的保存属性。初始化/读档时，`InitializeOnLoad` 从 `MBObjectManager.Instance.GetObjectTypeList<Settlement>()` 获取它；`Settlement` 不在上述 `_objects` 类型槽中，所以不能写 `CampaignObjectManager.Find<Settlement>(id)`。
3. `MobileParties` 是所有已登记的移动队伍，Caravan、Patrol、Militia、Garrison、Bandit、Villager、Lord、Custom 和 `PartiesWithoutPartyComponent` 是按 `PartyComponent`/状态派生的分类视图。组件变化前后由内部方法先移出再加入正确分类。

正常 mod 代码从 `Campaign.Current.CampaignObjectManager` 读取；创建、注销、状态迁移由 `Hero`、`Clan`、`Kingdom`、`MobileParty` 的工厂、行为和 Action 触发的内部路径负责。

## 公共属性

下面的集合类型是 `MBReadOnlyList<T>`，调用者应把它们当作只读快照/只读入口，不要直接改动内部列表。

| 成员 | 契约 | 典型用途 |
| --- | --- | --- |
| `Settlements` | `public MBReadOnlyList<Settlement> Settlements { get; private set; }` | 全部据点；来源是 `MBObjectManager` 的 `Settlement` 类型列表 |
| `MobileParties` | `public MBReadOnlyList<MobileParty> MobileParties { get; }` | 全部已登记移动队伍 |
| `CaravanParties` | `public MBReadOnlyList<MobileParty> CaravanParties { get; }` | 商队分类 |
| `PatrolParties` | `public MBReadOnlyList<MobileParty> PatrolParties { get; }` | 巡逻队分类 |
| `MilitiaParties` | `public MBReadOnlyList<MobileParty> MilitiaParties { get; }` | 民兵队分类 |
| `GarrisonParties` | `public MBReadOnlyList<MobileParty> GarrisonParties { get; }` | 驻军队分类 |
| `BanditParties` | `public MBReadOnlyList<MobileParty> BanditParties { get; }` | 强盗队分类 |
| `VillagerParties` | `public MBReadOnlyList<MobileParty> VillagerParties { get; }` | 村民队分类 |
| `LordParties` | `public MBReadOnlyList<MobileParty> LordParties { get; }` | 领主队分类 |
| `CustomParties` | `public MBReadOnlyList<MobileParty> CustomParties { get; }` | 自定义 `PartyComponent` 队伍分类 |
| `PartiesWithoutPartyComponent` | `public MBReadOnlyList<MobileParty> PartiesWithoutPartyComponent { get; }` | 暂无队伍组件的队伍 |
| `AliveHeroes` | `public MBReadOnlyList<Hero> AliveHeroes { get; }` | 活着/可用的英雄集合 |
| `DeadOrDisabledHeroes` | `public MBReadOnlyList<Hero> DeadOrDisabledHeroes { get; }` | 已死亡或禁用的英雄集合 |
| `Clans` | `public MBReadOnlyList<Clan> Clans { get; }` | 已登记氏族 |
| `Kingdoms` | `public MBReadOnlyList<Kingdom> Kingdoms { get; }` | 已登记王国 |
| `Factions` | `public MBReadOnlyList<IFaction> Factions { get; }` | 由氏族/王国登记路径维护的派系列表 |

`MaxCreatedPostfixIndex`、`PreAfterLoad()`、`AfterLoad()`、`GetMaxObjectSubId()`、`OnItemAdded()` 和 `UnregisterItem()` 出现在私有嵌套 `CampaignObjectType<T>` 的实现中，不是 `CampaignObjectManager` 顶层可供 mod 调用的成员。把反编译器把嵌套成员提升后的签名写成顶层 API，会导致错误示例。

## 依赖关系

| 方向 | 类型/系统 | 关系 |
|---|---|---|
| 持有者 | [`Campaign`](../../campaign/Campaign) | 创建、持有、初始化并在读档时重建管理器 |
| 基础注册表 | [`MBObjectManager`](../MBObjectManager) | 提供据点列表和底层对象注册表 |
| 对象基类 | [`MBObjectBase`](../MBObjectBase) | 提供 `StringId`、`MBGUID`、就绪状态和通用加载生命周期 |
| 业务消费者 | [`Hero`](../../campaign/Hero)、[`MobileParty`](../../campaign/MobileParty) | 消费管理器集合中的具体战役状态 |
| 修改边界 | `*Action.Apply` | 先改变世界事实，再由内部路径更新分类集合 |

## 公共方法契约

### `CampaignObjectManager()`

```csharp
public CampaignObjectManager();
```

构造函数初始化内部类型槽、基础列表和派对分类列表。虽然它是 public，mod 通常不应调用它来创建第二个管理器；当前战役的实例由 `Campaign` 构造并持有。

### `Find<T>(string id)`

```csharp
public T Find<T>(string id) where T : MBObjectBase;
```

只在四个已登记类型中对 `StringId` 做精确匹配。未命中返回 `default(T)`，对引用类型即 `null`；不抛“未找到”异常。调用必须在 Campaign 对象管理器已初始化后进行。

### `FindFirst<T>(Predicate<T> predicate)`

```csharp
public T FindFirst<T>(Predicate<T> predicate) where T : MBObjectBase;
```

在与 `T` 精确相同的注册集合中按顺序返回第一个满足谓词的对象，未命中返回 `default(T)`。实现会直接调用谓词；不要传 `null`，需要全量遍历时使用 `FindAll<T>(null)`。

### `FindAll<T>(Predicate<T> predicate)`

```csharp
public MBReadOnlyList<T> FindAll<T>(Predicate<T> predicate) where T : MBObjectBase;
```

返回新的 `MBList<T>` 结果。`predicate == null` 表示返回该精确类型注册集合中的全部对象；不支持 `Settlement`、`Town` 或 `Village` 作为此管理器的查找类型。

### `FindNextUniqueStringId<T>(string id)`

```csharp
public string FindNextUniqueStringId<T>(string id) where T : MBObjectBase;
```

在 `T` 的内部注册列表中检查 ID；未占用时返回原 ID，占用时解析末尾数字并生成新的后缀。它是游戏对象创建路径使用的 ID 辅助器，不是“把任意对象注册进管理器”的入口。`Hero`、`Clan`、`Kingdom` 和 `MobileParty` 的创建代码会先调用它，再调用各自的内部 `Add*` 路径。

## 注册、分类与生命周期边界

### 谁注册什么

- `AddHero`、`AddClan`、`AddKingdom`、`AddMobileParty` 是 `internal`，会分配相应对象类型的 `MBGUID`，放入基础列表，并更新 `IsReady`/分类状态。
- `HeroStateChanged` 在英雄从存活变为死亡/禁用或反向恢复时移动 `AliveHeroes` 与 `DeadOrDisabledHeroes`。
- `BeforePartyComponentChanged` 和 `AfterPartyComponentChanged` 是 `internal`，在 `MobileParty` 队伍组件变更前后维护分类列表。
- `RemoveClan`、`RemoveMobileParty`、`UnregisterDeadHero` 等内部路径由 `Action` 或 `CampaignBehavior` 使用；mod 不应通过反射直接调用它们，也不应直接删只读列表中的元素。

### 保存图不是查找图

1.3.15 的 `CampaignObjectManager` 保存字段包括：

| 标记 | 成员 | 含义 |
| --- | --- | --- |
| `[SaveableField(20)]` | `_deadOrDisabledHeroes` | 死亡/禁用英雄基础列表 |
| `[SaveableField(30)]` | `_aliveHeroes` | 存活英雄基础列表 |
| `[SaveableField(40)]` | `_clans` | 氏族基础列表 |
| `[SaveableField(50)]` | `_kingdoms` | 王国基础列表 |
| `[SaveableField(71)]` | `_mobileParties` | 移动队伍基础列表 |
| `[SaveableProperty(80)]` | `Settlements` | 从 `MBObjectManager` 取得并随管理器保存的据点列表 |

其他派对分类列表和 `Factions` 是运行时索引，不是每个都单独建立保存字段。读档初始化后，管理器重新组织对象类型槽与派系/派对分类。这个保存图由 [`Campaign`](../../campaign/Campaign) 持有；它不是 mod 行为 `SyncData` 的存储桶。

## 真实消费链

源码中的消费方向可以概括为：

| 消费者 | 调用 | 作用 |
| --- | --- | --- |
| `Campaign` | 构造 `new CampaignObjectManager()`；初始化/读档时调用内部初始化 | 建立并持有战役级管理器 |
| `HeroCreator`、`Hero` | `Find<Hero>`、`FindNextUniqueStringId<Hero>` | 防止重复英雄并分配新对象 ID |
| `Clan`、`Kingdom`、`MobileParty` | `FindNextUniqueStringId<T>` 与内部 `Add*` | 创建对象并登记到对应基础/分类列表 |
| `ConversationCharacterData` | `FindFirst<MobileParty>` | 按队伍索引找会话中的移动队伍 |
| Encyclopedia pages | `Find<Hero>`、`Find<Clan>`、`Find<Kingdom>` | 从字符串 ID 解析百科对象 |
| `CampaignBehavior` / `Action` | 内部移除、状态迁移入口 | 在每日行为、死亡、灭族等世界变更后维护索引 |

### 与 Settlement、Town、Village 的关系

`Settlement` 继承 `MBObjectBase`，但不进入 `CampaignObjectManager._objects`。据点 ID 查询应使用 `Settlement.Find(id)`、`MBObjectManager.Instance.GetObject<Settlement>(id)`，或遍历 `Campaign.Current.Settlements`；`Town`、`Village` 是 `Settlement` 上的领域数据/组件，不是此管理器的独立注册类型。

### 与 Behavior、Action、UI 和 Model 的关系

- **Behavior：** 在 `DailyTick`、读档初始化或事件回调中读取这些列表，随后把状态变更交给对应 `*Action.Apply` 或实体 API。
- **Action：** 如灭族、英雄生命周期和队伍组件变化会触发管理器的内部维护；Action 是变更边界，不是 mod 读取集合的替代入口。
- **UI/Encyclopedia：** 可用 `Find<T>` 按 ID 或用只读分类列表显示对象；UI 不应缓存跨读档的对象引用。
- **Model：** `Campaign.Current.Models` 中的模型计算资源、民兵、经济等数值；它们可以消费 `Settlement`/`Town`/`Village` 状态，但 `CampaignObjectManager` 不计算这些数值，也不应被当作模型注册器。

## 何时使用 / 何时不要使用

**适合使用：**

- 已有精确 `Hero`、`Clan`、`Kingdom` 或 `MobileParty` ID，需要在战役运行中解析对象。
- 需要枚举全部移动队伍、活着的英雄或某类派对，并且调用发生在 Campaign 初始化完成后。
- 需要读 `Settlement` 集合，但仍通过 `Settlements`、`Settlement.Find` 或 `MBObjectManager` 的据点路径获取。

**不要使用：**

- 用 `Find<MBObjectBase>` 期待得到所有子类，或用 `Find<Settlement>` 查据点。
- 直接构造新的 `CampaignObjectManager` 代替 `Campaign.Current` 的实例；新实例不代表当前战役，也没有正确的保存/注册状态。
- 修改返回列表、手动设置 `IsReady`、手动把对象塞进分类列表；这些操作会绕过 ID、保存和 Action 生命周期。
- 在 Campaign 仍未加载完成、读档对象尚未重新链接时，把查找结果当成稳定的跨存档引用。

## 可运行的读取示例

下面的例子使用真实的 Campaign 入口和 1.3.15 类型；重点是据点走 `Settlement.Find`，而不是误用管理器泛型查找。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Library;

CampaignObjectManager objects = Campaign.Current.CampaignObjectManager;

Hero derthert = objects.Find<Hero>("lord_derthert");
if (derthert != null && derthert.IsAlive)
{
    Clan clan = derthert.Clan;
    Kingdom kingdom = clan?.Kingdom;
}

MBReadOnlyList<MobileParty> parties = objects.FindAll<MobileParty>(null);
foreach (MobileParty party in parties)
{
    if (party.IsLordParty && party.CurrentSettlement != null)
    {
        Settlement location = party.CurrentSettlement;
        Town town = location.Town;
        Village village = location.Village;
    }
}

Settlement Praven = Settlement.Find("town_praven");
```

示例应在 `Campaign` 已启动的行为或其他战役回调中运行。`derthert`、`town_praven` 只是游戏中真实的 1.3.15 ID 示例；生产 mod 应处理返回 `null` 的情况，不能假定目标对象永远存在。

## 版本与风险

- 已对照 1.4.5：源码仍位于 `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignObjectManager.cs`，外层的公开属性、四种 `_objects` 精确类型和四个泛型查找方法契约保持一致；1.4.5 采用文件作用域命名空间等源码排版变化，不改变这里的调用边界。
- `FindFirst` 的谓词没有空值保护；谓词内部访问 `Party`、`Clan`、`Town` 等可空关系时需要自己判空。
- `FindAll` 返回新结果列表，但其中对象仍是当前战役对象。不要把对象引用跨读档保存；把可持久化 ID 放入 Behavior 的 [`SyncData`](../CampaignBehaviorBase) 并在加载后重新解析。
- 列表分类由 PartyComponent、英雄状态和 Action 生命周期共同维护。直接改字段会让 UI、AI、经济模型和保存图看到不一致状态。
- 这个类型只解决对象索引，不解决每日状态写入；每日民兵/经济等数值应查对应 Model 和 Behavior 的调用链，不能从这里推断“已写入存档”。

## 导航

- ↑ 父级：[campaign-ext API](./)
- ↔ 同级：[CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignBehaviorManager](../CampaignBehaviorManager) · [MBObjectManager](../MBObjectManager)
- 相关对象：[Campaign](../../campaign/Campaign) · [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [Kingdom](../../campaign/Kingdom) · [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement)
- 返回：[`CampaignBehaviorDataStore`](../../campaign/CampaignBehaviorDataStore) 说明另一条 Behavior 私有状态保存通道
