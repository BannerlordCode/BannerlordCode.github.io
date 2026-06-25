---
title: "Soundtrack"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Soundtrack`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Soundtrack

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class Soundtrack`
**Base:** 无
**File:** `TaleWorlds.PSAI/net/Soundtrack.cs`

## 概述

`Soundtrack` 位于 `psai.net`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.net` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### getThemeById
`public Theme getThemeById(int id)`

**用途 / Purpose:** 处理 `get theme by id` 相关逻辑。

### GetSegmentById
`public Segment GetSegmentById(int id)`

**用途 / Purpose:** 获取 `segment by id` 的当前值。

### getSoundtrackInfo
`public SoundtrackInfo getSoundtrackInfo()`

**用途 / Purpose:** 处理 `get soundtrack info` 相关逻辑。

### getThemeInfo
`public ThemeInfo getThemeInfo(int themeId)`

**用途 / Purpose:** 处理 `get theme info` 相关逻辑。

### getSegmentInfo
`public SegmentInfo getSegmentInfo(int snippetId)`

**用途 / Purpose:** 处理 `get segment info` 相关逻辑。

### UpdateMaxPreBeatMsOfCompatibleMiddleOrBridgeSnippets
`public void UpdateMaxPreBeatMsOfCompatibleMiddleOrBridgeSnippets()`

**用途 / Purpose:** 更新 `max pre beat ms of compatible middle or bridge snippets` 的状态或数据。

### BuildAllIndirectionSequences
`public void BuildAllIndirectionSequences()`

**用途 / Purpose:** 处理 `build all indirection sequences` 相关逻辑。

## 使用示例

```csharp
var value = new Soundtrack();
value.Clear();
```

## 参见

- [完整类目录](../catalog)