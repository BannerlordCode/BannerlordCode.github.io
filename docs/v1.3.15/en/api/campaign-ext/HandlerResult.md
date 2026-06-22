<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HandlerResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HandlerResult

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `HandlerResult` is a class in the `TaleWorlds.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsSuccessful` | `public bool IsSuccessful { get; }` |
| `Error` | `public string Error { get; }` |
| `NextMessage` | `public Message NextMessage { get; }` |


## Key Methods

### CreateSuccessful

```csharp
public static HandlerResult CreateSuccessful()
```

### CreateSuccessful

```csharp
public static HandlerResult CreateSuccessful(Message nextMessage)
```

### CreateFailed

```csharp
public static HandlerResult CreateFailed(string error)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)