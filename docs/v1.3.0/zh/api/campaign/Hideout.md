<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Hideout`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Hideout

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Hideout : SettlementComponent, ISpottable`
**Base:** `SettlementComponent`
**File:** `TaleWorlds.CampaignSystem/Settlements/Hideout.cs`

## 概述

`Hideout` 位于 `TaleWorlds.CampaignSystem.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NextPossibleAttackTime` | `public CampaignTime NextPossibleAttackTime { get; }` |
| `All` | `public static MBReadOnlyList<Hideout> All { get; }` |
| `IsInfested` | `public bool IsInfested { get; }` |
| `MapFaction` | `public override IFaction MapFaction { get; }` |
| `IsSpotted` | `public bool IsSpotted { get; set; }` |

## 主要方法

### UpdateNextPossibleAttackTime
`public void UpdateNextPossibleAttackTime()`

**用途 / Purpose:** 更新 `next possible attack time` 的状态或数据。

### GetDefenderParties
`public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 获取 `defender parties` 的当前值。

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 获取 `next defender party` 的当前值。

### OnPartyEntered
`public override void OnPartyEntered(MobileParty mobileParty)`

**用途 / Purpose:** 当 `party entered` 事件触发时调用此方法。

### OnPartyLeft
`public override void OnPartyLeft(MobileParty mobileParty)`

**用途 / Purpose:** 当 `party left` 事件触发时调用此方法。

### OnRelatedPartyRemoved
`public override void OnRelatedPartyRemoved(MobileParty mobileParty)`

**用途 / Purpose:** 当 `related party removed` 事件触发时调用此方法。

### OnInit
`public override void OnInit()`

**用途 / Purpose:** 当 `init` 事件触发时调用此方法。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var value = new Hideout();
value.UpdateNextPossibleAttackTime();
```

## 参见

- [完整类目录](../catalog)