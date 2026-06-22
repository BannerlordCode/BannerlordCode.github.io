<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecruitmentVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitmentVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `RecruitmentVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsQuitting` | `public bool IsQuitting { get; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `FocusedVolunteerTroop` | `public RecruitVolunteerTroopVM FocusedVolunteerTroop { get; set; }` |
| `FocusedVolunteerOwner` | `public RecruitVolunteerOwnerVM FocusedVolunteerOwner { get; set; }` |
| `PartyWageHint` | `public HintViewModel PartyWageHint { get; set; }` |
| `PartyCapacityHint` | `public HintViewModel PartyCapacityHint { get; set; }` |
| `PartySpeedHint` | `public BasicTooltipViewModel PartySpeedHint { get; set; }` |
| `RemainingFoodHint` | `public HintViewModel RemainingFoodHint { get; set; }` |
| `TotalWealthHint` | `public HintViewModel TotalWealthHint { get; set; }` |
| `TotalCostHint` | `public HintViewModel TotalCostHint { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `RecruitAllHint` | `public BasicTooltipViewModel RecruitAllHint { get; set; }` |
| `PartyWage` | `public int PartyWage { get; set; }` |
| `PartyCapacityText` | `public string PartyCapacityText { get; set; }` |
| `PartyWageText` | `public string PartyWageText { get; set; }` |
| `RecruitAllText` | `public string RecruitAllText { get; set; }` |
| `PartySpeedText` | `public string PartySpeedText { get; set; }` |
| `ResetAllText` | `public string ResetAllText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `RemainingFoodText` | `public string RemainingFoodText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshScreen

```csharp
public void RefreshScreen()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### ExecuteForceQuit

```csharp
public void ExecuteForceQuit()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### ExecuteRecruitAll

```csharp
public void ExecuteRecruitAll()
```

### Deactivate

```csharp
public void Deactivate()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetGetKeyTextFromKeyIDFunc

```csharp
public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

### SetRecruitAllInputKey

```csharp
public void SetRecruitAllInputKey(HotKey hotKey)
```

### SetResetInputKey

```csharp
public void SetResetInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)