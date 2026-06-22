<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeOptions`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeOptions

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `NativeOptions` is a class in the `TaleWorlds.Engine.Options` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `VideoOptions` | `public static List<NativeOptionData> VideoOptions { get; }` |
| `GraphicsOptions` | `public static List<NativeOptionData> GraphicsOptions { get; }` |


## Key Methods

### GetGFXPresetName

```csharp
public static string GetGFXPresetName(NativeOptions.ConfigQuality presetIndex)
```

### IsGFXOptionChangeable

```csharp
public static bool IsGFXOptionChangeable(NativeOptions.ConfigQuality config)
```

### ReadRGLConfigFiles

```csharp
public static void ReadRGLConfigFiles()
```

### GetConfig

```csharp
public static float GetConfig(NativeOptions.NativeOptionsType type)
```

### GetDefaultConfig

```csharp
public static float GetDefaultConfig(NativeOptions.NativeOptionsType type)
```

### GetDefaultConfigForOverallSettings

```csharp
public static float GetDefaultConfigForOverallSettings(NativeOptions.NativeOptionsType type, int config)
```

### GetGameKeys

```csharp
public static int GetGameKeys(int keyType, int i)
```

### GetSoundDeviceName

```csharp
public static string GetSoundDeviceName(int i)
```

### GetMonitorDeviceName

```csharp
public static string GetMonitorDeviceName(int i)
```

### GetVideoDeviceName

```csharp
public static string GetVideoDeviceName(int i)
```

### GetSoundDeviceCount

```csharp
public static int GetSoundDeviceCount()
```

### GetMonitorDeviceCount

```csharp
public static int GetMonitorDeviceCount()
```

### GetVideoDeviceCount

```csharp
public static int GetVideoDeviceCount()
```

### GetResolutionCount

```csharp
public static int GetResolutionCount()
```

### RefreshOptionsData

```csharp
public static void RefreshOptionsData()
```

### GetRefreshRateCount

```csharp
public static int GetRefreshRateCount()
```

### GetRefreshRateAtIndex

```csharp
public static int GetRefreshRateAtIndex(int index)
```

### SetCustomResolution

```csharp
public static void SetCustomResolution(int width, int height)
```

### GetResolution

```csharp
public static void GetResolution(ref int width, ref int height)
```

### GetDesktopResolution

```csharp
public static void GetDesktopResolution(ref int width, ref int height)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)