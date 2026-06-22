<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiSelectionQueryPopUpVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiSelectionQueryPopUpVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MultiSelectionQueryPopUpVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `InquiryElements` | `public MBBindingList<InquiryElementVM> InquiryElements { get; set; }` |
| `MaxSelectableOptionCount` | `public int MaxSelectableOptionCount { get; set; }` |
| `MinSelectableOptionCount` | `public int MinSelectableOptionCount { get; set; }` |
| `IsSearchAvailable` | `public bool IsSearchAvailable { get; set; }` |
| `SearchText` | `public string SearchText { get; set; }` |
| `SearchPlaceholderText` | `public string SearchPlaceholderText { get; set; }` |


## 主要方法

### SetData

```csharp
public void SetData(MultiSelectionInquiryData data)
```

### ExecuteAffirmativeAction

```csharp
public override void ExecuteAffirmativeAction()
```

### ExecuteNegativeAction

```csharp
public override void ExecuteNegativeAction()
```

### OnClearData

```csharp
public override void OnClearData()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)