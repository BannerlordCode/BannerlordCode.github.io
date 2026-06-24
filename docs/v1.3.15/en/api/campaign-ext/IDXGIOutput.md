<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IDXGIOutput`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IDXGIOutput

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public interface IDXGIOutput`
**Area:** campaign-ext

## Overview

`IDXGIOutput` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateDXGIFactory
`public static extern int CreateDXGIFactory(ref Guid riid, out IntPtr factory)`

**Purpose:** Creates a new `d x g i factory` instance or object.

### Equals
`public override bool Equals(object o)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
IDXGIOutput implementation = GetDXGIOutputImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
