---
title: "GameNotificationItemVM"
description: "GameNotificationItemVM 的自动生成类参考。"
---
# GameNotificationItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class GameNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs`

## 概述

`GameNotificationItemVM` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ExtraTimeInMs` | `public int ExtraTimeInMs { get; set; }` |
| `GameNotificationText` | `public string GameNotificationText { get; set; }` |
| `CharacterNameText` | `public string CharacterNameText { get; set; }` |
| `NotificationSoundId` | `public string NotificationSoundId { get; set; }` |
| `DialogSoundPath` | `public string DialogSoundPath { get; set; }` |
| `Announcer` | `public CharacterImageIdentifierVM Announcer { get; set; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
GameNotificationItemVM instance = ...;
```

## 参见

- [本区域目录](../)