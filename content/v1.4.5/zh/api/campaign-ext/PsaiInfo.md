---
title: "PsaiInfo"
description: "PsaiInfo 的自动生成类参考。"
---
# PsaiInfo

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public struct PsaiInfo`
**Base:** 无
**File:** `TaleWorlds.PSAI/net/PsaiInfo.cs`

## 概述

`PsaiInfo` 位于 `psai.net`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.net` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `psaiState` | `public PsaiState psaiState { get; }` |
| `upcomingPsaiState` | `public PsaiState upcomingPsaiState { get; }` |
| `lastBasicMoodThemeId` | `public int lastBasicMoodThemeId { get; }` |
| `effectiveThemeId` | `public int effectiveThemeId { get; }` |
| `upcomingThemeId` | `public int upcomingThemeId { get; }` |
| `currentIntensity` | `public float currentIntensity { get; }` |
| `upcomingIntensity` | `public float upcomingIntensity { get; }` |
| `themesQueued` | `public int themesQueued { get; }` |
| `targetSegmentId` | `public int targetSegmentId { get; }` |
| `intensityIsHeld` | `public bool intensityIsHeld { get; }` |
| `returningToLastBasicMood` | `public bool returningToLastBasicMood { get; }` |
| `remainingMillisecondsInRestMode` | `public int remainingMillisecondsInRestMode { get; }` |
| `paused` | `public bool paused { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
PsaiInfo instance = ...;
```

## 参见

- [本区域目录](../)