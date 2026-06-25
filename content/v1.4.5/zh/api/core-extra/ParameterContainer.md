---
title: "ParameterContainer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ParameterContainer`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ParameterContainer

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterContainer`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ParameterContainer.cs`

## 概述

`ParameterContainer` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddParameter
`public void AddParameter(string key, string value, bool overwriteIfExists)`

**用途 / Purpose:** 向当前集合/状态中添加 `parameter`。

### AddParameterConcurrent
`public void AddParameterConcurrent(string key, string value, bool overwriteIfExists)`

**用途 / Purpose:** 向当前集合/状态中添加 `parameter concurrent`。

### AddParametersConcurrent
`public void AddParametersConcurrent(IEnumerable<KeyValuePair<string, string>> parameters, bool overwriteIfExists)`

**用途 / Purpose:** 向当前集合/状态中添加 `parameters concurrent`。

### ClearParameters
`public void ClearParameters()`

**用途 / Purpose:** 处理 `clear parameters` 相关逻辑。

### TryGetParameter
`public bool TryGetParameter(string key, out string outValue)`

**用途 / Purpose:** 尝试获取 `get parameter`，通常以 out 参数返回结果。

### TryGetParameterAsBool
`public bool TryGetParameterAsBool(string key, out bool outValue)`

**用途 / Purpose:** 尝试获取 `get parameter as bool`，通常以 out 参数返回结果。

### TryGetParameterAsInt
`public bool TryGetParameterAsInt(string key, out int outValue)`

**用途 / Purpose:** 尝试获取 `get parameter as int`，通常以 out 参数返回结果。

### TryGetParameterAsUInt16
`public bool TryGetParameterAsUInt16(string key, out ushort outValue)`

**用途 / Purpose:** 尝试获取 `get parameter as u int16`，通常以 out 参数返回结果。

### TryGetParameterAsFloat
`public bool TryGetParameterAsFloat(string key, out float outValue)`

**用途 / Purpose:** 尝试获取 `get parameter as float`，通常以 out 参数返回结果。

### TryGetParameterAsByte
`public bool TryGetParameterAsByte(string key, out byte outValue)`

**用途 / Purpose:** 尝试获取 `get parameter as byte`，通常以 out 参数返回结果。

### TryGetParameterAsSByte
`public bool TryGetParameterAsSByte(string key, out sbyte outValue)`

**用途 / Purpose:** 尝试获取 `get parameter as s byte`，通常以 out 参数返回结果。

### TryGetParameterAsVec3
`public bool TryGetParameterAsVec3(string key, out Vec3 outValue)`

**用途 / Purpose:** 尝试获取 `get parameter as vec3`，通常以 out 参数返回结果。

### TryGetParameterAsVec2
`public bool TryGetParameterAsVec2(string key, out Vec2 outValue)`

**用途 / Purpose:** 尝试获取 `get parameter as vec2`，通常以 out 参数返回结果。

### GetParameter
`public string GetParameter(string key)`

**用途 / Purpose:** 获取 `parameter` 的当前值。

### Clone
`public ParameterContainer Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

## 使用示例

```csharp
var value = new ParameterContainer();
value.AddParameter("example", "example", false);
```

## 参见

- [完整类目录](../catalog)