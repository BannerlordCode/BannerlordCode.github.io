<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBStringBuilder`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBStringBuilder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MBStringBuilder`
**Base:** 无
**File:** `TaleWorlds.Library/MBStringBuilder.cs`

## 概述

> TODO: 从开发者角度补充本类的职责与典型用例。

## 主要属性

| Name | Signature |
|------|-----------|
| `Length` | `public int Length { get; }` |

## 主要方法

### Initialize
```csharp
public void Initialize(int capacity = 16, string callerMemberName = "")
```

### ToStringAndRelease
```csharp
public string ToStringAndRelease()
```

### Release
```csharp
public void Release()
```

### Append
```csharp
public MBStringBuilder Append(char value)
```

### Append
```csharp
public MBStringBuilder Append(int value)
```

### Append
```csharp
public MBStringBuilder Append(uint value)
```

### Append
```csharp
public MBStringBuilder Append(float value)
```

### Append
```csharp
public MBStringBuilder Append(double value)
```

### AppendLine
```csharp
public MBStringBuilder AppendLine()
```

### ToString
```csharp
public override string ToString()
```

### Acquire
```csharp
public static StringBuilder Acquire(int capacity = 16)
```

### Release
```csharp
public static void Release(StringBuilder sb)
```

### GetStringAndReleaseBuilder
```csharp
public static string GetStringAndReleaseBuilder(StringBuilder sb)
```

## 使用示例

```csharp
// TODO: 补充典型用例
```

## 参见

- [完整类目录](../catalog)