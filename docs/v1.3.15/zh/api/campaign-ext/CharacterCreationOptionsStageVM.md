<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationOptionsStageVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationOptionsStageVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CharacterCreationOptionsStageVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `OptionsController` | `public CampaignOptionsControllerVM OptionsController { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### CanAdvanceToNextStage

```csharp
public override bool CanAdvanceToNextStage()
```

### OnNextStage

```csharp
public override void OnNextStage()
```

### OnPreviousStage

```csharp
public override void OnPreviousStage()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

### AddCameraControlInputKey

```csharp
public void AddCameraControlInputKey(HotKey hotKey)
```

### AddCameraControlInputKey

```csharp
public void AddCameraControlInputKey(GameKey gameKey)
```

### AddCameraControlInputKey

```csharp
public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)