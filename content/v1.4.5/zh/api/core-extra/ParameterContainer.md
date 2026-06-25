---
title: "ParameterContainer"
description: "ParameterContainer 的自动生成类参考。"
---
# ParameterContainer

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterContainer`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ParameterContainer.cs`

## 概述

`ParameterContainer` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddParameter
`public void AddParameter(string key, string value, bool overwriteIfExists)`

**用途 / Purpose:** **用途 / Purpose:** 将 parameter 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
parameterContainer.AddParameter("example", "example", false);
```

### AddParameterConcurrent
`public void AddParameterConcurrent(string key, string value, bool overwriteIfExists)`

**用途 / Purpose:** **用途 / Purpose:** 将 parameter concurrent 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
parameterContainer.AddParameterConcurrent("example", "example", false);
```

### AddParametersConcurrent
`public void AddParametersConcurrent(IEnumerable<KeyValuePair<string, string>> parameters, bool overwriteIfExists)`

**用途 / Purpose:** **用途 / Purpose:** 将 parameters concurrent 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
parameterContainer.AddParametersConcurrent(iEnumerable<KeyValuePair<string, "example", false);
```

### ClearParameters
`public void ClearParameters()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的parameters。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
parameterContainer.ClearParameters();
```

### TryGetParameter
`public bool TryGetParameter(string key, out string outValue)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get parameter 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameter("example", outValue);
```

### TryGetParameterAsBool
`public bool TryGetParameterAsBool(string key, out bool outValue)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get parameter as bool 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsBool("example", outValue);
```

### TryGetParameterAsInt
`public bool TryGetParameterAsInt(string key, out int outValue)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get parameter as int 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsInt("example", outValue);
```

### TryGetParameterAsUInt16
`public bool TryGetParameterAsUInt16(string key, out ushort outValue)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get parameter as u int16 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsUInt16("example", outValue);
```

### TryGetParameterAsFloat
`public bool TryGetParameterAsFloat(string key, out float outValue)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get parameter as float 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsFloat("example", outValue);
```

### TryGetParameterAsByte
`public bool TryGetParameterAsByte(string key, out byte outValue)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get parameter as byte 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsByte("example", outValue);
```

### TryGetParameterAsSByte
`public bool TryGetParameterAsSByte(string key, out sbyte outValue)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get parameter as s byte 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsSByte("example", outValue);
```

### TryGetParameterAsVec3
`public bool TryGetParameterAsVec3(string key, out Vec3 outValue)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get parameter as vec3 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsVec3("example", outValue);
```

### TryGetParameterAsVec2
`public bool TryGetParameterAsVec2(string key, out Vec2 outValue)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get parameter as vec2 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsVec2("example", outValue);
```

### GetParameter
`public string GetParameter(string key)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 parameter 的结果。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.GetParameter("example");
```

### Clone
`public ParameterContainer Clone()`

**用途 / Purpose:** **用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 ParameterContainer 实例
ParameterContainer parameterContainer = ...;
var result = parameterContainer.Clone();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ParameterContainer parameterContainer = ...;
parameterContainer.AddParameter("example", "example", false);
```

## 参见

- [本区域目录](../)