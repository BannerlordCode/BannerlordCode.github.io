<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeTelemetryManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeTelemetryManager

**命名空间:** TaleWorlds.DotNet
**模块:** TaleWorlds.DotNet
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`NativeTelemetryManager` 是 `TaleWorlds.DotNet` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TelemetryLevelMask` | `public static TelemetryLevelMask TelemetryLevelMask { get; }` |


## 主要方法

### GetTelemetryLevelMask

```csharp
public TelemetryLevelMask GetTelemetryLevelMask()
```

### StartTelemetryConnection

```csharp
public void StartTelemetryConnection(bool showErrors)
```

### StopTelemetryConnection

```csharp
public void StopTelemetryConnection()
```

### BeginTelemetryScopeInternal

```csharp
public void BeginTelemetryScopeInternal(TelemetryLevelMask levelMask, string scopeName)
```

### EndTelemetryScopeInternal

```csharp
public void EndTelemetryScopeInternal()
```

### BeginTelemetryScopeBaseLevelInternal

```csharp
public void BeginTelemetryScopeBaseLevelInternal(TelemetryLevelMask levelMask, string scopeName)
```

### EndTelemetryScopeBaseLevelInternal

```csharp
public void EndTelemetryScopeBaseLevelInternal()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)