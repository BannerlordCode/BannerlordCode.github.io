<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AudioData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AudioData

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class AudioData`
**Base:** none
**File:** `TaleWorlds.PSAI/net/AudioData.cs`

## Overview

`AudioData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AudioData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetFullLengthInMilliseconds
`public int GetFullLengthInMilliseconds()`

**Purpose:** Gets the current value of `full length in milliseconds`.

### GetPreBeatZoneInMilliseconds
`public int GetPreBeatZoneInMilliseconds()`

**Purpose:** Gets the current value of `pre beat zone in milliseconds`.

### GetPostBeatZoneInMilliseconds
`public int GetPostBeatZoneInMilliseconds()`

**Purpose:** Gets the current value of `post beat zone in milliseconds`.

### GetSampleCountByMilliseconds
`public int GetSampleCountByMilliseconds(int milliSeconds)`

**Purpose:** Gets the current value of `sample count by milliseconds`.

## Usage Example

```csharp
var value = new AudioData();
```

## See Also

- [Complete Class Catalog](../catalog)