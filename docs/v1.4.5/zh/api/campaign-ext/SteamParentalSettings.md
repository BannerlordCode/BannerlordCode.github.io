<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamParentalSettings`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamParentalSettings

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamParentalSettings`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamParentalSettings.cs`

## 概述

`SteamParentalSettings` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### BIsParentalLockEnabled
`public static bool BIsParentalLockEnabled()`

**用途 / Purpose:** 处理 `b is parental lock enabled` 相关逻辑。

### BIsParentalLockLocked
`public static bool BIsParentalLockLocked()`

**用途 / Purpose:** 处理 `b is parental lock locked` 相关逻辑。

### BIsAppBlocked
`public static bool BIsAppBlocked(AppId_t nAppID)`

**用途 / Purpose:** 处理 `b is app blocked` 相关逻辑。

### BIsAppInBlockList
`public static bool BIsAppInBlockList(AppId_t nAppID)`

**用途 / Purpose:** 处理 `b is app in block list` 相关逻辑。

### BIsFeatureBlocked
`public static bool BIsFeatureBlocked(EParentalFeature eFeature)`

**用途 / Purpose:** 处理 `b is feature blocked` 相关逻辑。

### BIsFeatureInBlockList
`public static bool BIsFeatureInBlockList(EParentalFeature eFeature)`

**用途 / Purpose:** 处理 `b is feature in block list` 相关逻辑。

## 使用示例

```csharp
SteamParentalSettings.BIsParentalLockEnabled();
```

## 参见

- [完整类目录](../catalog)