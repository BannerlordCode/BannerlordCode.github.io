<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementDateTimeConverter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementDateTimeConverter

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public sealed class ManagementDateTimeConverter`
**Area:** campaign-ext

## Overview

`ManagementDateTimeConverter` lives in `System.Management`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToDateTime
`public static DateTime ToDateTime(string dmtfDate)`

**Purpose:** Handles logic related to `to date time`.

### ToDmtfDateTime
`public static string ToDmtfDateTime(DateTime date)`

**Purpose:** Handles logic related to `to dmtf date time`.

### ToDmtfTimeInterval
`public static string ToDmtfTimeInterval(TimeSpan timespan)`

**Purpose:** Handles logic related to `to dmtf time interval`.

### ToTimeSpan
`public static TimeSpan ToTimeSpan(string dmtfTimespan)`

**Purpose:** Handles logic related to `to time span`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ManagementDateTimeConverter.ToDateTime("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
