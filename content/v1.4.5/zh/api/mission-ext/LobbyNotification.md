---
title: "LobbyNotification"
description: "LobbyNotification 的自动生成类参考。"
---
# LobbyNotification

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyNotification`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs`

## 概述

`LobbyNotification` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `Type` | `public NotificationType Type { get; set; }` |
| `Date` | `public DateTime Date { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `Parameters` | `public Dictionary<string, string> Parameters { get; set; }` |

## 主要方法

### GetParametersAsString
`public string GetParametersAsString()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 parameters as string 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyNotification 实例
LobbyNotification lobbyNotification = ...;
var result = lobbyNotification.GetParametersAsString();
```

### GetTextObjectOfMessage
`public TextObject GetTextObjectOfMessage()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 text object of message 的结果。

```csharp
// 先通过子系统 API 拿到 LobbyNotification 实例
LobbyNotification lobbyNotification = ...;
var result = lobbyNotification.GetTextObjectOfMessage();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LobbyNotification lobbyNotification = ...;
lobbyNotification.GetParametersAsString();
```

## 参见

- [本区域目录](../)