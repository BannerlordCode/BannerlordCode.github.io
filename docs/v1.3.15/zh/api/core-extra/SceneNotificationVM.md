<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SceneNotificationVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneNotificationVM

**命名空间:** TaleWorlds.Core.ViewModelCollection.Information
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`SceneNotificationVM` 是 `TaleWorlds.Core.ViewModelCollection.Information` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveData` | `public SceneNotificationData ActiveData { get; }` |
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsReady` | `public bool IsReady { get; set; }` |
| `ClickToContinueText` | `public string ClickToContinueText { get; set; }` |
| `TitleText` | `public string TitleText { get; }` |
| `AffirmativeDescription` | `public string AffirmativeDescription { get; }` |
| `CancelDescription` | `public string CancelDescription { get; }` |
| `SceneID` | `public string SceneID { get; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; }` |
| `IsButtonOkShown` | `public bool IsButtonOkShown { get; }` |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown { get; }` |
| `AffirmativeTitleText` | `public string AffirmativeTitleText { get; }` |
| `NegativeTitleText` | `public string NegativeTitleText { get; }` |
| `Scene` | `public object Scene { get; set; }` |
| `EndProgress` | `public float EndProgress { get; set; }` |
| `AffirmativeHint` | `public BasicTooltipViewModel AffirmativeHint { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### CreateNotification

```csharp
public void CreateNotification(SceneNotificationData data)
```

### ClearData

```csharp
public void ClearData()
```

### ExecuteAffirmativeProcess

```csharp
public void ExecuteAffirmativeProcess()
```

### ExecuteClose

```csharp
public void ExecuteClose()
```

### ExecuteNegativeProcess

```csharp
public void ExecuteNegativeProcess()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)