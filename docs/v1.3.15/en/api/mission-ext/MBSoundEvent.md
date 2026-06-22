<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSoundEvent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSoundEvent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MBSoundEvent` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### PlaySound

```csharp
public static bool PlaySound(int soundCodeId, in Vec3 position)
```

### PlaySound

```csharp
public static bool PlaySound(int soundCodeId, Vec3 position)
```

### PlaySound

```csharp
public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, Vec3 position)
```

### PlaySound

```csharp
public static bool PlaySound(string soundPath, ref SoundEventParameter parameter, Vec3 position)
```

### PlaySound

```csharp
public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, in Vec3 position)
```

### PlayEventFromSoundBuffer

```csharp
public static void PlayEventFromSoundBuffer(string eventId, byte soundData, Scene scene, bool is3d, bool isBlocking)
```

### CreateEventFromExternalFile

```csharp
public static void CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)