---
title: "DefaultSettlementPatrolModel"
description: "Bannerlord 默认 Guard House 巡逻资格、生成间隔和文化队伍模板选择规则。"
---
# DefaultSettlementPatrolModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementPatrolModel : SettlementPatrolModel`  
**Base:** [`SettlementPatrolModel`](../SettlementPatrolModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementPatrolModel.cs`（1.4.5 权威实现）

## 一句话职责

`DefaultSettlementPatrolModel` 用城镇所有者、叛军状态、Guard House 等级和建筑巡逻强度效果，决定默认巡逻队的资格、等待时间和文化模板。

## 心智模型

默认实现只做查询：它寻找据点 `Town.Buildings` 中等级大于零的 `SettlementGuardHouse`。合资格的非叛军城镇在 Guard House 等级越高时等待越短，模板强度由 `PatrolPartyStrength` 建筑效果映射到所属文化的弱/中/强巡逻模板。真正的生成仍由 `PatrolPartiesCampaignBehavior` 排队并调用 `CreatePatrolParty`。

1.4.5 的默认方法没有为海军单独建立一套模板分支，调用方仍必须传递接口要求的 `naval` 参数；定制海军规则时应明确实现这一差异。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| [`SettlementPatrolModel`](../SettlementPatrolModel) / [`GameModels`](../GameModels) | 契约与注册后的访问入口。 |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | 提供所有者、城镇类型和建筑列表。 |
| `SettlementGuardHouse` / `BuildingEffectEnum.PatrolPartyStrength` | 提供资格、等级和巡逻队强度。 |
| `CultureObject` / `PatrolPartiesCampaignBehavior` | 选择文化模板并将结果应用为实际巡逻队。 |

## 默认规则

| 成员 | 1.4.5 行为 |
| --- | --- |
| `CanSettlementHavePatrolParties` | 只有 `OwnerClan != null`、非叛军且 `settlement.IsTown` 时才继续检查 Guard House。 |
| Guard House 检查 | 找到 `DefaultBuildingTypes.SettlementGuardHouse` 且 `CurrentLevel > 0` 的建筑才算有资格。 |
| `GetPatrolPartySpawnDuration` | 返回 `CampaignTime.Days(10 - (level - 1) * 2)`；等级越高生成间隔越短。 |
| `GetPartyTemplateForPatrolParty` | `PatrolPartyStrength` 为 `1/2/3` 时返回所属文化的弱/中/强模板；其他值回退到弱模板；找不到建筑时返回空。 |

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Town != null);
if (settlement != null)
{
    SettlementPatrolModel model = Campaign.Current.Models.SettlementPatrolModel;
    if (model.CanSettlementHavePatrolParties(settlement, naval: false))
    {
        CampaignTime spawnAfter = model
            .GetPatrolPartySpawnDuration(settlement, naval: false);
        PartyTemplateObject template = model
            .GetPartyTemplateForPatrolParty(settlement, naval: false);
    }
}
```

替换实现应在 `InitializeGameStarter` 中注册，并保持“资格、延迟、模板”三者一致；不要从 `DefaultSettlementPatrolModel` 的查询方法直接调用 `CreatePatrolParty`。

## 风险与版本边界

- `GetPartyTemplateForPatrolParty` 在没有 Guard House 时返回空；调用方若绕过资格检查直接读取模板，后续生成可能空引用。
- `PatrolPartyStrength` 的效果值由建筑系统提供；返回未知强度时默认回退弱模板，不能假设所有值都代表一个文化模板。
- 修改生成间隔会改变整个地图的 party 数量、带宽和存档增长速度；不要在每次查询中使用随机延迟。
- `PatrolPartiesCampaignBehavior` 负责队列和清理；模型只改变策略，不能代替 `DestroyPartyAction` 的生命周期处理。

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementPatrolModel.cs`（全文 60 行，本批最短）。
**抽象契约：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementPatrolModel.cs`（3 个 abstract 成员，`:9`/`:11`/`:13`）。
**入口：** `Campaign.Current.Models.SettlementPatrolModel`。

`public class DefaultSettlementPatrolModel : SettlementPatrolModel`（`DefaultSettlementPatrolModel.cs:8`），**三个成员全部 override，零字段零常量。**

**而三个方法的第二个参数 `bool naval` 全部未被使用。** `GetPatrolPartySpawnDuration(Settlement, bool naval)`（`:10`）、`CanSettlementHavePatrolParties(Settlement, bool naval)`（`:16`）、`GetPartyTemplateForPatrolParty(Settlement, bool naval)`（`:45`）**体内都没读它**。**所以海防巡逻与陆防巡逻在默认实现下完全一样**——这个参数是留给派生实现的钩子。

### 典型用法

**三个成员里两个会因「没有岗哨」而分歧，而分歧的方式不一致——这是本页最要紧的一条：**

| 成员 | 无岗哨时 |
| --- | --- |
| `CanSettlementHavePatrolParties`（`:16`） | 走 `HasGuardHouse`（`:20` → `:25`-`:28`）**安全返回 false** |
| `GetPartyTemplateForPatrolParty`（`:45`） | 判 `guardHouse != null`（`:48`）**安全返回 null** |
| **`GetPatrolPartySpawnDuration`（`:10`）** | **`GetGuardHouse` 返回 null，下一行直接解 `guardHouse.CurrentLevel` ⇒ NRE** |

看 `:12`-`:13`：`Building guardHouse = GetGuardHouse(settlement);` 之后**没有任何判空**。**所以「先问资格再问间隔」不是建议，是强制顺序**——反过来必崩。

**而 `CanSettlementHavePatrolParties` 还有第二道更严的门：`settlement.IsTown`（`:18`）。** 也就是说**城堡与城镇在这个模型里待遇不同——城堡即使有岗哨也不产巡逻队。**

生成间隔公式是 `CampaignTime.Days(10f - ((float)guardHouse.CurrentLevel - 1f) * 2f)`（`:13`）。**按级数展开：**

| 岗哨等级 | 间隔（天） |
| --- | --- |
| 1 | 10 |
| 2 | 8 |
| 3 | 6 |
| 4 | 4 |
| 5 | 2 |
| **6** | **0** |
| **≥7** | **负数** |

**等级 6 就已经是 0 天，而更高等级直接为负。** `CampaignTime.Days` 不会钳到 0，所以**调高岗哨等级会得到一个「已经过去」的时间点**，而不是「无限快生成」。

`GetPartyTemplateForPatrolParty`（`:45`）是一个 `switch` 表达式，判据是把 `PatrolPartyStrength` 建筑效果**强转 int**（`:50`）后匹配 1/2/3，落到 `_ => Weak`（`:55`）。**所以效果值 0、4 或任何非 1/2/3 的值全部得到弱模板**——三档之外没有第四档。

想安全地取间隔，就自己补那道判空：

```csharp
public static bool TryGetPatrolInterval(Settlement settlement, out CampaignTime interval)
{
    SettlementPatrolModel model = Campaign.Current.Models.SettlementPatrolModel;
    if (!model.CanSettlementHavePatrolParties(settlement, naval: false))
    {
        interval = CampaignTime.Zero;
        return false;
    }
    interval = model.GetPatrolPartySpawnDuration(settlement, naval: false);
    PartyTemplateObject template = model.GetPartyTemplateForPatrolParty(settlement, naval: false);
    Debug.Print(settlement.StringId + " interval=" + interval + " template=" + (template != null ? template.StringId : "<null>"), 0);
    return true;
}
```

**上例第一行的 `CanSettlementHavePatrolParties` 不是多余的开销，它是防 NRE 的闸门。** 顺序反过来（先取间隔后问资格）在无岗哨城镇上会直接崩。

**而 `naval: false` 是显式写的**，提醒你这两个参数在默认实现下无意义——但**派生实现可能读它**，所以调用方仍应按实际用途传。

### 最容易踩的坑

- `GetPatrolPartySpawnDuration` 在没有 Guard House 时**不做判空**（`DefaultSettlementPatrolModel.cs:12`-`:13` 直接解引用 `guardHouse.CurrentLevel`），与另两个成员的返回 null/false 行为不一致。必须先用 `CanSettlementHavePatrolParties` 问过资格再取间隔。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementPatrolModel](../SettlementPatrolModel)
- [相关：SettlementGarrisonModel](../SettlementGarrisonModel) · [CampaignTime](../CampaignTime)
- [下游：Settlement](../../campaign/Settlement) · [MobileParty](../../campaign/MobileParty)
