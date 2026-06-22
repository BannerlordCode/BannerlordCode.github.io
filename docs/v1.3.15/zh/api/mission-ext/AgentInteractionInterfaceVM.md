<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentInteractionInterfaceVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentInteractionInterfaceVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`AgentInteractionInterfaceVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TargetHealth` | `public int TargetHealth { get; set; }` |
| `ShowHealthBar` | `public bool ShowHealthBar { get; set; }` |
| `PrimaryInteractionMessages` | `public MBBindingList<MissionPrimaryInteractionItemVM> PrimaryInteractionMessages { get; set; }` |
| `SecondaryInteractionMessages` | `public MBBindingList<MissionInteractionItemBaseVM> SecondaryInteractionMessages { get; set; }` |
| `BackgroundColor` | `public string BackgroundColor { get; set; }` |
| `TextColor` | `public string TextColor { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HasSecondaryMessages` | `public bool HasSecondaryMessages { get; set; }` |
| `DisplayInteractionText` | `public bool DisplayInteractionText { get; set; }` |
| `ForcedInteractionMessages` | `public MBBindingList<MissionPrimaryInteractionItemVM> ForcedInteractionMessages { get; set; }` |
| `HasForcedMessages` | `public bool HasForcedMessages { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnFocusedHealthChanged

```csharp
public void OnFocusedHealthChanged(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)
```

### OnActiveMissionHintChanged

```csharp
public void OnActiveMissionHintChanged(MissionHint previousHint, MissionHint newHint)
```

### AddSecondaryMessage

```csharp
public void AddSecondaryMessage(MissionInteractionItemBaseVM message)
```

### RemoveSecondaryMessage

```csharp
public bool RemoveSecondaryMessage(MissionInteractionItemBaseVM message)
```

### HasSecondaryInteractionMessage

```csharp
public bool HasSecondaryInteractionMessage(MissionInteractionItemBaseVM message)
```

### ResetFocus

```csharp
public void ResetFocus()
```

### SetForcedInteractionTexts

```csharp
public void SetForcedInteractionTexts(TextObject text1, bool isDisabled1, TextObject text2, bool isDisabled2)
```

### ClearForcedInteractionTexts

```csharp
public void ClearForcedInteractionTexts()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)