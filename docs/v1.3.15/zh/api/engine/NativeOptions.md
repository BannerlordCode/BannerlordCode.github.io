<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeOptions`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeOptions

**命名空间:** TaleWorlds.Engine.Options
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`NativeOptions` 是 `TaleWorlds.Engine.Options` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `VideoOptions` | `public static List<NativeOptionData> VideoOptions { get; }` |
| `GraphicsOptions` | `public static List<NativeOptionData> GraphicsOptions { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)