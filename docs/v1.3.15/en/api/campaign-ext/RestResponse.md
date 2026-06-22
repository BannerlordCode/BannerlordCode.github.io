<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RestResponse`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RestResponse

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `RestResponse` is a class in the `TaleWorlds.Diamond.Rest` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Successful` | `public bool Successful { get; }` |
| `SuccessfulReason` | `public string SuccessfulReason { get; }` |
| `FunctionResult` | `public RestFunctionResult FunctionResult { get; set; }` |
| `UserCertificate` | `public byte UserCertificate { get; set; }` |
| `RemainingMessageCount` | `public int RemainingMessageCount { get; }` |


## Key Methods

### SetSuccessful

```csharp
public void SetSuccessful(bool successful, string successfulReason)
```

### Create

```csharp
public static RestResponse Create(bool successful, string successfulReason)
```

### TryDequeueMessage

```csharp
public RestResponseMessage TryDequeueMessage()
```

### ClearMessageQueue

```csharp
public void ClearMessageQueue()
```

### EnqueueMessage

```csharp
public void EnqueueMessage(RestResponseMessage message)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)