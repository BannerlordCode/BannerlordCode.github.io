<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MessageInfo`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageInfo

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MessageInfo` is a class in the `TaleWorlds.Network` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `SourceIPAddress` | `public string SourceIPAddress { get; set; }` |
| `SourceClientId` | `public Guid SourceClientId { get; set; }` |
| `SourceUserName` | `public string SourceUserName { get; set; }` |
| `SourcePlatform` | `public string SourcePlatform { get; set; }` |
| `SourcePlatformId` | `public string SourcePlatformId { get; set; }` |
| `DestinationPostBox` | `public string DestinationPostBox { get; set; }` |
| `DestinationClientId` | `public Guid DestinationClientId { get; set; }` |


## Key Methods

### WriteTo

```csharp
public void WriteTo(Stream stream, bool fromServer)
```

### ReadFrom

```csharp
public static MessageInfo ReadFrom(Stream stream, bool fromServer)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)