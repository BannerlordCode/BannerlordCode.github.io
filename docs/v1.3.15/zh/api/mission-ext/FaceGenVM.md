<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FaceGenVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FaceGenVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`FaceGenVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `AreAllTabsEnabled` | `public bool AreAllTabsEnabled { get; }` |
| `IsBodyEnabled` | `public bool IsBodyEnabled { get; set; }` |
| `IsFaceEnabled` | `public bool IsFaceEnabled { get; set; }` |
| `IsEyesEnabled` | `public bool IsEyesEnabled { get; set; }` |
| `IsNoseEnabled` | `public bool IsNoseEnabled { get; set; }` |
| `IsMouthEnabled` | `public bool IsMouthEnabled { get; set; }` |
| `IsHairEnabled` | `public bool IsHairEnabled { get; set; }` |
| `IsTaintEnabled` | `public bool IsTaintEnabled { get; set; }` |
| `FlipHairLbl` | `public string FlipHairLbl { get; set; }` |
| `SkinColorLbl` | `public string SkinColorLbl { get; set; }` |
| `RaceLbl` | `public string RaceLbl { get; set; }` |
| `GenderLbl` | `public string GenderLbl { get; set; }` |
| `CancelBtnLbl` | `public string CancelBtnLbl { get; set; }` |
| `DoneBtnLbl` | `public string DoneBtnLbl { get; set; }` |
| `BodyHint` | `public HintViewModel BodyHint { get; set; }` |


## 主要方法

### SetFaceGenerationParams

```csharp
public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### InitializeHistory

```csharp
public void InitializeHistory(FaceGenHistory faceGenHistory)
```

### OnTabClicked

```csharp
public void OnTabClicked(int index)
```

### SelectPreviousTab

```csharp
public void SelectPreviousTab()
```

### SelectNextTab

```csharp
public void SelectNextTab()
```

### Refresh

```csharp
public void Refresh(bool clearProperties)
```

### ExecuteHearCurrentVoiceSample

```csharp
public void ExecuteHearCurrentVoiceSample()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### ExecuteResetAll

```csharp
public void ExecuteResetAll()
```

### ExecuteRandomize

```csharp
public void ExecuteRandomize()
```

### ExecuteRandomizeAll

```csharp
public void ExecuteRandomizeAll()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### ExecuteRedo

```csharp
public void ExecuteRedo()
```

### ExecuteUndo

```csharp
public void ExecuteUndo()
```

### ExecuteChangeClothing

```csharp
public void ExecuteChangeClothing()
```

### AddCommand

```csharp
public void AddCommand()
```

### SetBodyProperties

```csharp
public void SetBodyProperties(BodyProperties bodyProperties, bool ignoreDebugValues, int race = 0, int gender = -1, bool recordChange = false)
```

### UpdateFacegen

```csharp
public void UpdateFacegen()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)