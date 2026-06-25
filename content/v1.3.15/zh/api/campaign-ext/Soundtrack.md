---
title: "Soundtrack"
description: "Soundtrack 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 Soundtrack 实例
Soundtrack soundtrack = ...;
soundtrack.Clear();
```

### getThemeById
`public Theme getThemeById(int id)`

**用途 / Purpose:** **用途 / Purpose:** 调用 getThemeById 对应的操作。

```csharp
// 先通过子系统 API 拿到 Soundtrack 实例
Soundtrack soundtrack = ...;
var result = soundtrack.getThemeById(0);
```

### GetSegmentById
`public Segment GetSegmentById(int id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 segment by id 的结果。

```csharp
// 先通过子系统 API 拿到 Soundtrack 实例
Soundtrack soundtrack = ...;
var result = soundtrack.GetSegmentById(0);
```

### getSoundtrackInfo
`public SoundtrackInfo getSoundtrackInfo()`

**用途 / Purpose:** **用途 / Purpose:** 调用 getSoundtrackInfo 对应的操作。

```csharp
// 先通过子系统 API 拿到 Soundtrack 实例
Soundtrack soundtrack = ...;
var result = soundtrack.getSoundtrackInfo();
```

### getThemeInfo
`public ThemeInfo getThemeInfo(int themeId)`

**用途 / Purpose:** **用途 / Purpose:** 调用 getThemeInfo 对应的操作。

```csharp
// 先通过子系统 API 拿到 Soundtrack 实例
Soundtrack soundtrack = ...;
var result = soundtrack.getThemeInfo(0);
```

### getSegmentInfo
`public SegmentInfo getSegmentInfo(int snippetId)`

**用途 / Purpose:** **用途 / Purpose:** 调用 getSegmentInfo 对应的操作。

```csharp
// 先通过子系统 API 拿到 Soundtrack 实例
Soundtrack soundtrack = ...;
var result = soundtrack.getSegmentInfo(0);
```

### UpdateMaxPreBeatMsOfCompatibleMiddleOrBridgeSnippets
`public void UpdateMaxPreBeatMsOfCompatibleMiddleOrBridgeSnippets()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 max pre beat ms of compatible middle or bridge snippets 的最新表示。

```csharp
// 先通过子系统 API 拿到 Soundtrack 实例
Soundtrack soundtrack = ...;
soundtrack.UpdateMaxPreBeatMsOfCompatibleMiddleOrBridgeSnippets();
```

### BuildAllIndirectionSequences
`public void BuildAllIndirectionSequences()`

**用途 / Purpose:** **用途 / Purpose:** 组装并返回all indirection sequences的构建结果。

```csharp
// 先通过子系统 API 拿到 Soundtrack 实例
Soundtrack soundtrack = ...;
soundtrack.BuildAllIndirectionSequences();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Soundtrack soundtrack = ...;
soundtrack.Clear();
```

## 参见

- [本区域目录](../)