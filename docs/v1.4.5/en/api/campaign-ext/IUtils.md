<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IUtils`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IUtils

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IUtils : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IUtils.cs`

## Overview

`IUtils` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### GetImageSize
`public virtual void GetImageSize(uint imageID, ref int width, ref int height)`

**Purpose:** Gets the current value of `image size`.

### GetImageRGBA
`public virtual void GetImageRGBA(uint imageID, byte buffer, uint bufferLength)`

**Purpose:** Gets the current value of `image r g b a`.

### RegisterForNotification
`public virtual void RegisterForNotification(string type)`

**Purpose:** Handles logic related to `register for notification`.

### GetNotification
`public virtual uint GetNotification(ulong notificationID, ref bool consumable, ref byte type, uint typeLength, byte content, uint contentSize)`

**Purpose:** Gets the current value of `notification`.

### ShowOverlayWithWebPage
`public virtual void ShowOverlayWithWebPage(string url)`

**Purpose:** Handles logic related to `show overlay with web page`.

### IsOverlayVisible
`public virtual bool IsOverlayVisible()`

**Purpose:** Handles logic related to `is overlay visible`.

### GetOverlayState
`public virtual OverlayState GetOverlayState()`

**Purpose:** Gets the current value of `overlay state`.

### DisableOverlayPopups
`public virtual void DisableOverlayPopups(string popupGroup)`

**Purpose:** Handles logic related to `disable overlay popups`.

### GetGogServicesConnectionState
`public virtual GogServicesConnectionState GetGogServicesConnectionState()`

**Purpose:** Gets the current value of `gog services connection state`.

## Usage Example

```csharp
var value = new IUtils();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)