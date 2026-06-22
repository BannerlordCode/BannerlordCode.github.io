<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ParameterContainer`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ParameterContainer

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterContainer`
**Base:** 无
**File:** `TaleWorlds.Library/ParameterContainer.cs`

## 概述

> TODO: 从开发者角度补充本类的职责与典型用例。

## 主要属性

| Name | Signature |
|------|-----------|
| `Iterator` | `public IEnumerable<KeyValuePair<string, string>> Iterator { get; }` |

## 主要方法

### AddParameter
```csharp
public void AddParameter(string key, string value, bool overwriteIfExists)
```

### AddParameterConcurrent
```csharp
public void AddParameterConcurrent(string key, string value, bool overwriteIfExists)
```

### AddParametersConcurrent
```csharp
public void AddParametersConcurrent(IEnumerable<KeyValuePair<string, string>> parameters, bool overwriteIfExists)
```

### ClearParameters
```csharp
public void ClearParameters()
```

### TryGetParameter
```csharp
public bool TryGetParameter(string key, out string outValue)
```

### TryGetParameterAsBool
```csharp
public bool TryGetParameterAsBool(string key, out bool outValue)
```

### TryGetParameterAsInt
```csharp
public bool TryGetParameterAsInt(string key, out int outValue)
```

### TryGetParameterAsUInt16
```csharp
public bool TryGetParameterAsUInt16(string key, out ushort outValue)
```

### TryGetParameterAsFloat
```csharp
public bool TryGetParameterAsFloat(string key, out float outValue)
```

### TryGetParameterAsByte
```csharp
public bool TryGetParameterAsByte(string key, out byte outValue)
```

### TryGetParameterAsSByte
```csharp
public bool TryGetParameterAsSByte(string key, out sbyte outValue)
```

### TryGetParameterAsVec3
```csharp
public bool TryGetParameterAsVec3(string key, out Vec3 outValue)
```

### TryGetParameterAsVec2
```csharp
public bool TryGetParameterAsVec2(string key, out Vec2 outValue)
```

### GetParameter
```csharp
public string GetParameter(string key)
```

### Clone
```csharp
public ParameterContainer Clone()
```

## 使用示例

```csharp
// TODO: 补充典型用例
```

## 参见

- [完整类目录](../catalog)