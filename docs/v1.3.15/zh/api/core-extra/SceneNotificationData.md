<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SceneNotificationData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneNotificationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationData`
**Base:** 无
**File:** `TaleWorlds.Core/SceneNotificationData.cs`

## 概述

`SceneNotificationData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneID` | `public virtual string SceneID { get; }` |
| `SoundEventPath` | `public virtual string SoundEventPath { get; }` |
| `TitleText` | `public virtual TextObject TitleText { get; }` |
| `AffirmativeDescriptionText` | `public virtual TextObject AffirmativeDescriptionText { get; }` |
| `NegativeDescriptionText` | `public virtual TextObject NegativeDescriptionText { get; }` |
| `AffirmativeHintText` | `public virtual TextObject AffirmativeHintText { get; }` |
| `AffirmativeHintTextExtended` | `public virtual TextObject AffirmativeHintTextExtended { get; }` |
| `AffirmativeTitleText` | `public virtual TextObject AffirmativeTitleText { get; }` |
| `NegativeTitleText` | `public virtual TextObject NegativeTitleText { get; }` |
| `AffirmativeText` | `public virtual TextObject AffirmativeText { get; }` |
| `NegativeText` | `public virtual TextObject NegativeText { get; }` |
| `IsAffirmativeOptionShown` | `public virtual bool IsAffirmativeOptionShown { get; }` |
| `IsNegativeOptionShown` | `public virtual bool IsNegativeOptionShown { get; }` |
| `PauseActiveState` | `public virtual bool PauseActiveState { get; }` |
| `RelevantContext` | `public virtual SceneNotificationData.RelevantContextType RelevantContext { get; }` |
| `SceneProperties` | `public virtual SceneNotificationData.NotificationSceneProperties SceneProperties { get; }` |

## 主要方法

### OnAffirmativeAction
```csharp
public virtual void OnAffirmativeAction()
```

### OnNegativeAction
```csharp
public virtual void OnNegativeAction()
```

### OnCloseAction
```csharp
public virtual void OnCloseAction()
```

### GetBanners
```csharp
public virtual Banner GetBanners()
```

### GetSceneNotificationCharacters
```csharp
public virtual SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()
```

### GetShips
```csharp
public virtual SceneNotificationData.SceneNotificationShip GetShips()
```

## 使用示例

```csharp
// SceneNotificationData (Data) 的典型用法
new SceneNotificationData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)