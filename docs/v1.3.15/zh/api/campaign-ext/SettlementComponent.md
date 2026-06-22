<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementComponent

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/SettlementComponent.cs`

## 概述

`SettlementComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<SettlementComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

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
```csharp
public virtual SettlementComponent.ProsperityLevel GetProsperityLevel()
```

### GetDefaultComponentBanner
```csharp
public virtual Banner GetDefaultComponentBanner()
```

### OnPartyEntered
```csharp
public virtual void OnPartyEntered(MobileParty mobileParty)
```

### OnPartyLeft
```csharp
public virtual void OnPartyLeft(MobileParty mobileParty)
```

### OnInit
```csharp
public virtual void OnInit()
```

### OnSessionStart
```csharp
public virtual void OnSessionStart()
```

### ChangeGold
```csharp
public void ChangeGold(int changeAmount)
```

### GetNumberOfTroops
```csharp
public int GetNumberOfTroops()
```

### Deserialize
```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### GetItemPrice
```csharp
public virtual int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)
```

### GetItemPrice
```csharp
public virtual int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)
```

### OnRelatedPartyRemoved
```csharp
public virtual void OnRelatedPartyRemoved(MobileParty mobileParty)
```

### GetPrisonerHeroes
```csharp
public List<CharacterObject> GetPrisonerHeroes()
```

## 使用示例

```csharp
// SettlementComponent (Component) 的典型用法
agent.GetComponent<SettlementComponent>();
```

## 参见

- [完整类目录](../catalog)