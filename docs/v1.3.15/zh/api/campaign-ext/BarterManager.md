<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterManager

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterManager.cs`

## 概述

`BarterManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static BarterManager Instance { get; set; }` |
| `LastBarterIsAccepted` | `public bool LastBarterIsAccepted { get; set; }` |

## 主要方法

### BeginPlayerBarter
```csharp
public void BeginPlayerBarter(BarterData args)
```

### StartBarterOffer
```csharp
public void StartBarterOffer(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, Hero beneficiaryOfOtherHero = null, BarterManager.BarterContextInitializer InitContext = null, int persuasionCostReduction = 0, bool isAIBarter = false, IEnumerable<Barterable> defaultBarterables = null)
```

### ExecuteAiBarter
```csharp
public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, Barterable barterable)
```

### ExecuteAiBarter
```csharp
public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, IEnumerable<Barterable> baseBarterables)
```

### ExecuteAIBarter
```csharp
public void ExecuteAIBarter(BarterData barterData, IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero)
```

### Close
```csharp
public void Close()
```

### IsOfferAcceptable
```csharp
public bool IsOfferAcceptable(BarterData args, Hero hero, PartyBase party)
```

### GetOfferValueForFaction
```csharp
public float GetOfferValueForFaction(BarterData barterData, IFaction faction)
```

### GetOfferValue
```csharp
public float GetOfferValue(Hero selfHero, PartyBase selfParty, PartyBase offererParty, IEnumerable<Barterable> offeredBarters)
```

### ApplyAndFinalizePlayerBarter
```csharp
public void ApplyAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)
```

### CancelAndFinalizePlayerBarter
```csharp
public void CancelAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)
```

### CanPlayerBarterWithHero
```csharp
public bool CanPlayerBarterWithHero(Hero hero)
```

### InitializeMarriageBarterContext
```csharp
public bool InitializeMarriageBarterContext(Barterable barterable, BarterData args, object obj)
```

### InitializeJoinFactionBarterContext
```csharp
public bool InitializeJoinFactionBarterContext(Barterable barterable, BarterData args, object obj)
```

### InitializeMakePeaceBarterContext
```csharp
public bool InitializeMakePeaceBarterContext(Barterable barterable, BarterData args, object obj)
```

### InitializeSafePassageBarterContext
```csharp
public bool InitializeSafePassageBarterContext(Barterable barterable, BarterData args, object obj)
```

### BarterContextInitializer
```csharp
public delegate bool BarterContextInitializer(Barterable barterable, BarterData args, object obj = null)
```

### BarterCloseEventDelegate
```csharp
public delegate void BarterCloseEventDelegate()
```

### BarterBeginEventDelegate
```csharp
public delegate void BarterBeginEventDelegate(BarterData args)
```

## 使用示例

```csharp
// BarterManager (Manager) 的典型用法
BarterManager.Current;
```

## 参见

- [完整类目录](../catalog)