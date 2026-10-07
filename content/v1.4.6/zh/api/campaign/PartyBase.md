---
title: "PartyBase"
description: "部队与定居点的统一战斗接口：名册、食物、士气、强度、可见性、遭遇战阵营，以及自定义名称与旗帜。"
---
# PartyBase

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`
**Source:** `TaleWorlds.CampaignSystem/Party/PartyBase.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`PartyBase` 是 `MobileParty` 与 `Settlement` 的**统一战斗接口**。它实现 `IBattleCombatant`，让战斗系统用同一套 API 操作「一支部队」或「一个聚落」——不需要知道对方是移动的还是固定的。它持有三个名册（`MemberRoster` / `PrisonRoster` / `ItemRoster`），提供食物、士气、强度、可见性等战斗相关属性的统一访问，并管理遭遇战中的阵营归属（`MapEventSide` / `Side`）。

它是 `sealed` 类，1,637 行。mod 对它的读远多于写：战斗结算、AI 决策、UI 显示都通过 `PartyBase` 读部队状态；写操作集中在名册增删（`AddMember` / `AddPrisoner` / `WoundMemberRosterElements`）和自定义名称/旗帜（`SetCustomName` / `SetCustomBanner`）。

## 心智模型

**它是「战斗系统眼里的部队」，不是「地图上的部队」。**

- `MobileParty` 管**地图层**：位置、移动、路径、AI 行为。
- `PartyBase` 管**战斗层**：名册、食物、士气、强度、阵营、可见性。
- 两者通过 `MobileParty.Party` 属性互指：`MobileParty` 持有 `PartyBase`，`PartyBase` 持有 `MobileParty`（可为 `null`，当它是聚落时）。
- `Settlement` 也持有 `PartyBase`：聚落被攻击时，战斗系统通过 `PartyBase` 操作聚落的驻军名册。

**为什么需要这一层**：战斗系统（`Mission` 层）需要统一操作「攻击方」和「防守方」，而攻击方可能是 `MobileParty`（野外遭遇），也可能是 `Settlement`（攻城战）。`PartyBase` 把这两者统一成 `IBattleCombatant`，让战斗逻辑不需要分支判断。

**三个常见误用**。一是**把 `PartyBase` 当独立对象创建**：构造函数是 `internal`，mod 只能通过 `MobileParty.Party` 或 `Settlement.Party` 拿到它。二是**忽略 `IsMobile` / `IsSettlement` 分支**：很多属性在 `IsMobile` 和 `IsSettlement` 下行为不同（如 `Position` 在聚落时返回 `Settlement.Position`）。三是**直接改名册不走 `AddToCounts`**：`MemberRoster` 的 `AddToCounts` 会处理英雄事件、版本号、缓存失效，直接操作 `TroopRosterElement` 会跳过这些。

## 怎么用

### 怎么拿到

```csharp
// 从 MobileParty 拿
PartyBase party = mobileParty.Party;

// 从 Settlement 拿
PartyBase settlementParty = settlement.Party;

// 玩家主队
PartyBase main = PartyBase.MainParty;
```

### 典型用法

```csharp
// 读战斗状态
float strength = party.EstimatedStrength;
int healthy = party.NumberOfHealthyMembers;
int wounded = party.NumberOfWoundedTotalMembers;
bool isStarving = party.IsStarving;

// 改名册
party.AddMember(character, 10);
party.AddPrisoner(prisonerChar, 1);
party.WoundMemberRosterElements(character, 2);

// 自定义名称与旗帜
party.SetCustomName(new TextObject("My Party"));
party.SetCustomBanner(banner);
```

### 坑

- **`PartySizeLimit` 是缓存的**。它检查 `MemberRoster.VersionNo` 来决定是否重算。如果你直接改名册不走 `AddToCounts`，`VersionNo` 不会更新，`PartySizeLimit` 会返回过期值。
- **`MapEventSide` 的 setter 会级联**。设它会同步 `MobileParty.AttachedParties` 的阵营，取消海陆过渡，并触发 `OnPartyVisibilityChanged`。
- **`UpdateVisibilityAndInspected` 是每帧调用的**。它从 `fromPosition`（通常是玩家主队位置）计算可见性。在 `TrueSight` 模式下所有部队都可见。

## 关键成员

### 身份与类型

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Settlement` | `public Settlement Settlement { get; private set; }` | 对应聚落。`null` 表示这是移动部队 | `PartyBase.cs:208` |
| `MobileParty` | `public MobileParty MobileParty { get; private set; }` | 对应移动部队。`null` 表示这是聚落 | `PartyBase.cs:214` |
| `IsSettlement` | `public bool IsSettlement` | 是否聚落 | `PartyBase.cs:218` |
| `IsMobile` | `public bool IsMobile` | 是否移动部队 | `PartyBase.cs:228` |
| `Name` | `public TextObject Name` | 名称。聚落时返回 `Settlement.Name`，移动时返回 `MobileParty.Name` | `PartyBase.cs:256` |
| `Id` | `public string Id` | 唯一标识。优先 `MobileParty.StringId`，其次 `Settlement.StringId` | `PartyBase.cs:319` |
| `Index` | `public int Index` | 派对索引。`-1` 表示无效 | `PartyBase.cs:448` |
| `IsValid` | `public bool IsValid` | 是否有效。`Index >= 0` | `PartyBase.cs:462` |
| `MainParty` | `public static PartyBase MainParty` | 玩家主队的 `PartyBase` | `PartyBase.cs:410` |

### 名册

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `MemberRoster` | `public TroopRoster MemberRoster { get; private set; }` | 成员名册 | `PartyBase.cs:240` |
| `PrisonRoster` | `public TroopRoster PrisonRoster { get; private set; }` | 俘虏名册 | `PartyBase.cs:246` |
| `ItemRoster` | `public ItemRoster ItemRoster { get; private set; }` | 物品栏 | `PartyBase.cs:252` |
| `PartySizeLimit` | `public int PartySizeLimit` | 成员上限。缓存，检查 `VersionNo` | `PartyBase.cs:860` |
| `PrisonerSizeLimit` | `public int PrisonerSizeLimit` | 俘虏上限。缓存 | `PartyBase.cs:876` |
| `NumberOfAllMembers` | `public int NumberOfAllMembers` | 全部成员数 | `PartyBase.cs:942` |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers` | 健康成员数 | `PartyBase.cs:912` |
| `NumberOfWoundedTotalMembers` | `public int NumberOfWoundedTotalMembers` | 受伤成员数 | `PartyBase.cs:932` |
| `NumberOfPrisoners` | `public int NumberOfPrisoners` | 俘虏数 | `PartyBase.cs:952` |
| `NumberOfMenWithHorse` | `public int NumberOfMenWithHorse` | 骑兵数 | `PartyBase.cs:1005` |
| `NumberOfMenWithoutHorse` | `public int NumberOfMenWithoutHorse` | 步兵数 | `PartyBase.cs:1020` |
| `GetNumberOfHealthyMenOfTier` | `public int GetNumberOfHealthyMenOfTier(int tier)` | 指定层级的健康成员数 | `PartyBase.cs:1029` |
| `AddMember` | `public int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)` | 添加成员 | `PartyBase.cs:1256` |
| `AddMembers` | `public void AddMembers(TroopRoster roster)` | 批量添加成员 | `PartyBase.cs:1271` |
| `AddPrisoner` | `public int AddPrisoner(CharacterObject element, int numberToAdd)` | 添加俘虏 | `PartyBase.cs:1250` |
| `AddPrisoners` | `public void AddPrisoners(TroopRoster roster)` | 批量添加俘虏 | `PartyBase.cs:1262` |
| `AddElementToMemberRoster` | `public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)` | 添加成员（可插前） | `PartyBase.cs:1287` |
| `WoundMemberRosterElements` | `public void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)` | 使成员受伤 | `PartyBase.cs:1299` |
| `WoundMemberRosterElementsWithIndex` | `public void WoundMemberRosterElementsWithIndex(int elementIndex, int numberToWound)` | 按索引使成员受伤 | `PartyBase.cs:1305` |

### 战斗状态

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `EstimatedStrength` | `public float EstimatedStrength` | 估算战斗力。缓存，检查 `VersionNo` | `PartyBase.cs:1073` |
| `CalculateCurrentStrength` | `public float CalculateCurrentStrength` | 计算当前战斗力（不缓存） | `PartyBase.cs:1110` |
| `GetCustomStrength` | `public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)` | 自定义战斗力计算 | `PartyBase.cs:1148` |
| `MapEvent` | `public MapEvent MapEvent` | 所属遭遇战 | `PartyBase.cs:557` |
| `MapEventSide` | `public MapEventSide MapEventSide` | 遭遇战阵营侧 | `PartyBase.cs:573` |
| `Side` | `public BattleSideEnum Side` | 战斗阵营（`Attacker` / `Defender` / `None`） | `PartyBase.cs:613` |
| `OpponentSide` | `public BattleSideEnum OpponentSide` | 对方阵营 | `PartyBase.cs:628` |
| `SiegeEvent` | `public SiegeEvent SiegeEvent` | 所属围城事件 | `PartyBase.cs:180` |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand(BattleSideEnum playerSide)` | 是否由玩家指挥 | `PartyBase.cs:748` |
| `IsPartyUnderPlayerCommand` | `public static bool IsPartyUnderPlayerCommand(PartyBase party)` | 静态版玩家指挥判断 | `PartyBase.cs:423` |

### 食物与士气

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `RemainingFoodPercentage` | `public int RemainingFoodPercentage` | 剩余食物百分比 | `PartyBase.cs:295` |
| `IsStarving` | `public bool IsStarving` | 是否挨饿。`RemainingFoodPercentage < 0` | `PartyBase.cs:309` |
| `DaysStarving` | `public float DaysStarving` | 挨饿天数 | `PartyBase.cs:274` |
| `OnConsumedFood` | `public void OnConsumedFood()` | 记录进食时间 | `PartyBase.cs:287` |

### 可见性

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `IsVisible` | `public bool IsVisible` | 是否可见 | `PartyBase.cs:152` |
| `UpdateVisibilityAndInspected` | `public void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)` | 更新可见性与被侦察状态 | `PartyBase.cs:1311` |
| `OnVisibilityChanged` | `public void OnVisibilityChanged(bool value)` | 可见性变化回调 | `PartyBase.cs:193` |

### 自定义名称与旗帜

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `CustomName` | `public TextObject CustomName { get; private set; }` | 自定义名称 | `PartyBase.cs:522` |
| `SetCustomName` | `public void SetCustomName(TextObject name)` | 设置自定义名称 | `PartyBase.cs:525` |
| `CustomBanner` | `public Banner CustomBanner { get; private set; }` | 自定义旗帜 | `PartyBase.cs:539` |
| `SetCustomBanner` | `public void SetCustomBanner(Banner banner)` | 设置自定义旗帜 | `PartyBase.cs:741` |
| `Banner` | `public Banner Banner` | 旗帜。聚落时返回 `Settlement.Banner`，移动时返回 `MobileParty.Banner` | `PartyBase.cs:543` |

### 其他

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Owner` | `public Hero Owner` | 所有者。优先 `_customOwner`，其次按类型取 | `PartyBase.cs:370` |
| `SetCustomOwner` | `public void SetCustomOwner(Hero customOwner)` | 设置自定义所有者 | `PartyBase.cs:388` |
| `LeaderHero` | `public Hero LeaderHero` | 领袖英雄 | `PartyBase.cs:395` |
| `MapFaction` | `public IFaction MapFaction` | 地图势力 | `PartyBase.cs:472` |
| `Culture` | `public CultureObject Culture` | 文化 | `PartyBase.cs:496` |
| `Ships` | `public MBReadOnlyList<Ship> Ships` | 舰船列表 | `PartyBase.cs:1178` |
| `FlagShip` | `public Ship FlagShip` | 旗舰 | `PartyBase.cs:1188` |
| `SetAsCameraFollowParty` | `public void SetAsCameraFollowParty()` | 设为相机跟随 | `PartyBase.cs:1456` |
| `GetNumberOfMenWith` | `public int GetNumberOfMenWith(TraitObject trait)` | 有指定特质的人数 | `PartyBase.cs:1236` |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static class PartyUtils
{
    // 读部队的战斗力摘要
    public static string GetStrengthSummary(PartyBase party)
    {
        int healthy = party.NumberOfHealthyMembers;
        int wounded = party.NumberOfWoundedTotalMembers;
        float strength = party.EstimatedStrength;
        return $"healthy={healthy} wounded={wounded} strength={strength:F0}";
    }

    // 给部队添加一批伤员
    public static void AddWoundedMembers(PartyBase party, CharacterObject character, int count, int wounded)
    {
        party.AddMember(character, count, wounded);
    }

    // 判断部队是否由玩家指挥
    public static bool IsPlayerCommanded(PartyBase party, BattleSideEnum playerSide)
    {
        return party.IsUnderPlayersCommand(playerSide);
    }
}
```

## 参见

- [`../MobileParty`](../MobileParty) — 移动部队实体，`PartyBase` 的地图层对应。
- [`../Settlement`](../Settlement) — 定居点实体，也持有 `PartyBase`。
- [`../Hero`](../Hero) — 领主实体，`LeaderHero` / `Owner` 的类型。
- [`../../campaign-ext/MBObjectBase`](../../campaign-ext/MBObjectBase) — 战役对象基类。

## 导航

- 同桶：[`../MobileParty`](../MobileParty) · [`../Settlement`](../Settlement) · [`../Hero`](../Hero) · [`../Clan`](../Clan)
- 父索引：[`../_index`](../_index)
