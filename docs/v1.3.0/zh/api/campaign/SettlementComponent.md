<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementComponent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementComponent

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/SettlementComponent.cs`

## 概述

`SettlementComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `SettlementComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Gold` | `public int Gold { get; }` |
| `BackgroundCropPosition` | `public float BackgroundCropPosition { get; set; }` |
| `BackgroundMeshName` | `public string BackgroundMeshName { get; set; }` |
| `WaitMeshName` | `public string WaitMeshName { get; set; }` |
| `CastleBackgroundMeshName` | `public string CastleBackgroundMeshName { get; set; }` |
| `Owner` | `public PartyBase Owner { get; set; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `MapFaction` | `public abstract IFaction MapFaction { get; }` |
| `Name` | `public TextObject Name { get; set; }` |
| `IsOwnerUnassigned` | `public bool IsOwnerUnassigned { get; set; }` |
| `IsTown` | `public virtual bool IsTown { get; }` |
| `IsCastle` | `public virtual bool IsCastle { get; }` |

## 主要方法

### GetProsperityLevel
`public virtual SettlementComponent.ProsperityLevel GetProsperityLevel()`

**用途 / Purpose:** 获取 `prosperity level` 的当前值。

### GetDefaultComponentBanner
`public virtual Banner GetDefaultComponentBanner()`

**用途 / Purpose:** 获取 `default component banner` 的当前值。

### OnPartyEntered
`public virtual void OnPartyEntered(MobileParty mobileParty)`

**用途 / Purpose:** 当 `party entered` 事件触发时调用此方法。

### OnPartyLeft
`public virtual void OnPartyLeft(MobileParty mobileParty)`

**用途 / Purpose:** 当 `party left` 事件触发时调用此方法。

### OnInit
`public virtual void OnInit()`

**用途 / Purpose:** 当 `init` 事件触发时调用此方法。

### OnSessionStart
`public virtual void OnSessionStart()`

**用途 / Purpose:** 当 `session start` 事件触发时调用此方法。

### ChangeGold
`public void ChangeGold(int changeAmount)`

**用途 / Purpose:** 处理 `change gold` 相关逻辑。

### GetNumberOfTroops
`public int GetNumberOfTroops()`

**用途 / Purpose:** 获取 `number of troops` 的当前值。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### GetItemPrice
`public virtual int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**用途 / Purpose:** 获取 `item price` 的当前值。

### GetItemPrice
`public virtual int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**用途 / Purpose:** 获取 `item price` 的当前值。

### OnRelatedPartyRemoved
`public virtual void OnRelatedPartyRemoved(MobileParty mobileParty)`

**用途 / Purpose:** 当 `related party removed` 事件触发时调用此方法。

### GetPrisonerHeroes
`public List<CharacterObject> GetPrisonerHeroes()`

**用途 / Purpose:** 获取 `prisoner heroes` 的当前值。

## 使用示例

```csharp
var implementation = new CustomSettlementComponent();
```

## 参见

- [完整类目录](../catalog)