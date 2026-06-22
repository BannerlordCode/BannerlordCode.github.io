<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitmentVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitmentVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`RecruitmentVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)