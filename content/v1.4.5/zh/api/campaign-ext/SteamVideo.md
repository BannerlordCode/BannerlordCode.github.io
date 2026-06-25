---
title: "SteamVideo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamVideo`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamVideo

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamVideo`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamVideo.cs`

## 概述

`SteamVideo` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetVideoURL
`public static void GetVideoURL(AppId_t unVideoAppID)`

**用途 / Purpose:** 获取 `video u r l` 的当前值。

### IsBroadcasting
`public static bool IsBroadcasting(out int pnNumViewers)`

**用途 / Purpose:** 处理 `is broadcasting` 相关逻辑。

### GetOPFSettings
`public static void GetOPFSettings(AppId_t unVideoAppID)`

**用途 / Purpose:** 获取 `o p f settings` 的当前值。

### GetOPFStringForApp
`public static bool GetOPFStringForApp(AppId_t unVideoAppID, out string pchBuffer, ref int pnBufferSize)`

**用途 / Purpose:** 获取 `o p f string for app` 的当前值。

## 使用示例

```csharp
SteamVideo.GetVideoURL(unVideoAppID);
```

## 参见

- [完整类目录](../catalog)