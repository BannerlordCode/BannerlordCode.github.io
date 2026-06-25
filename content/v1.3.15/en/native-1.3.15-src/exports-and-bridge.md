---
title: Exports and Managed Bridge
description: TaleWorlds.Native.dll v1.3.15 exports, startup entry points, and managed interop bridge
---
# Exports and Managed Bridge

## Mental Model

Treat `Exports and Managed Bridge` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

This page focuses on the connection points between `TaleWorlds.Native.dll` v1.3.15 and the managed layer. It complements the [Native Reference](../../native/): the managed reference explains the C# interfaces, while this page shows the DLL-side exports, callbacks, and native type-name anchors visible in the decompiled source.

## Startup Exports

| Export | Ordinal clue | Header declaration | Source implementation | Notes |
|--------|--------------|--------------------|-----------------------|-------|
| `WotsMain` | 27 | `TaleWorlds.Native.dll.h:2488` | `TaleWorlds.Native.dll.c:82473` | Main entry variant |
| `WotsMainNative` | 28 | `TaleWorlds.Native.dll.h:2489` | `TaleWorlds.Native.dll.c:82490` | Native main entry variant |
| `WotsMainNativeCoreCLR` | 29 | `TaleWorlds.Native.dll.h:2490` | `TaleWorlds.Native.dll.c:82507` | CoreCLR native entry variant |
| `WotsMainNativeSDLL` | 30 | `TaleWorlds.Native.dll.h:2478` | `TaleWorlds.Native.dll.c:81586` | Native SDLL entry |
| `WotsMainSDLL` | 31 | `TaleWorlds.Native.dll.h:2477` | `TaleWorlds.Native.dll.c:81569` | Entry imported by managed `MBDotNet.WotsMainDotNet` |

`WotsMainSDLL` is the most visible entry point from managed startup code. In [LibraryApplicationInterface](../../native/LibraryApplicationInterface/), `MBDotNet.WotsMainDotNet` binds to it through `DllImport("TaleWorlds.Native.dll", EntryPoint = "WotsMainSDLL")`.

## Callback Registration Exports

| Export | Ordinal clue | Header declaration | Source implementation | Managed-side role |
|--------|--------------|--------------------|-----------------------|-------------------|
| `pass_controller_methods` | 34 | `TaleWorlds.Native.dll.h:15415` | `TaleWorlds.Native.dll.c:1316414` | Receives the current AppDomain / controller initializer delegate |
| `pass_managed_initialize_method_pointer` | 35 | `TaleWorlds.Native.dll.h:15416` | `TaleWorlds.Native.dll.c:1316424` | Receives the managed initialization delegate |
| `pass_managed_library_callback_method_pointers` | 36 | `TaleWorlds.Native.dll.h:15414` | `TaleWorlds.Native.dll.c:1316402` | Receives managed library callback method pointers |

The decompiled source also shows these three exports being grouped:

- Near `TaleWorlds.Native.dll.c:323564-323565`, `pass_controller_methods`, `pass_managed_initialize_method_pointer`, and `pass_managed_library_callback_method_pointers` are passed as adjacent arguments.
- Near `TaleWorlds.Native.dll.c:1318122-1318124`, the same three symbols are stored into a local structure/table.

Those locations are useful anchors when tracing startup.

## Managed Startup Sequence

```text
MBDotNet.PassControllerMethods(delegate)
MBDotNet.PassManagedInitializeMethodPointerDotNet(delegate)
MBDotNet.PassManagedEngineCallbackMethodPointersDotNet(delegate)
MBDotNet.WotsMainDotNet(args)
    ↓
TaleWorlds.Native.dll
    stores managed delegates and prepares native callback tables
    ↓
Managed library / engine callbacks
    call back into managed generated code
    ↓
ScriptingInterfaceObjects.SetFunctionPointer(id, pointer)
    ↓
LibraryApplicationInterface.SetObjects(...)
```

This sequence is an analysis path derived from the managed DllImport declarations and the DLL export semantics. The exact runtime timing should still be checked against the `TaleWorlds.Starter.Library` startup code.

## Callback Vftable Clues

| Vftable string | Example source locations | Notes |
|----------------|--------------------------|-------|
| `Managed_library_callbacks::vftable` | `TaleWorlds.Native.dll.c:1316384`, `1316454` | Managed library-level callback object |
| `Managed_engine_callbacks::vftable` | `TaleWorlds.Native.dll.c:293800`, `294217` | Managed engine-level callback object |
| `Managed_core_callbacks::vftable` | `TaleWorlds.Native.dll.c:1001044`, `1011573` | Core callback object |

These writes usually appear near construction, reset, or callback-object initialization. Tracing upward to constructors and downward to call sites helps connect exported functions to later managed callbacks.

## FTDN Native Wrapper Types

The `ftdn*` names are the clearest native type-name anchors for managed `NativeObject` wrappers.

| Native string | Example source locations | C# wrapper |
|---------------|--------------------------|------------|
| `ftdnNative_array` | `TaleWorlds.Native.dll.c:81262`, `87953`, `1318173`, `1319758` | `NativeArray` / `INativeArray` |
| `ftdnNative_object_array` | `TaleWorlds.Native.dll.c:81300`, `1319828`, `1320048` | `NativeObjectArray` / `INativeObjectArray` |
| `ftdnNative_string` | `TaleWorlds.Native.dll.c:81319`, `1319926`, `1320072` | `NativeString` / `INativeString` |

The managed `[EngineClass("ftdnNative_array")]` attributes are covered in [EngineClass and EngineMethod](../../native/EngineMethod/). On the decompiled side, these strings and vftable writes help trace object creation, reference counting, and cross-boundary return values.

## Script Component Bridge

| Native string | Example source locations | Notes |
|---------------|--------------------------|-------|
| `rglNative_script_component` | `TaleWorlds.Native.dll.c:73039`, `700152`, `700178`, `721195` | Native script component type in the scene object/component system |

This type belongs near `rglScript_component` and `rglManaged_script_component` in the scene script-component family. See [Scene](../scene/).

## Mapping To Managed Native Reference

| Managed page | Native-side anchor |
|--------------|--------------------|
| [NativeObject](../../native/NativeObject/) | `IManaged` reference counting, `EngineClass` type registration, and `ftdn*` native objects |
| [INativeArray](../../native/INativeArray/) | `ftdnNative_array` strings, vftable writes, and `create/get_data_*` methods |
| [INativeString](../../native/INativeString/) | `ftdnNative_string` strings and string helper paths |
| [INativeObjectArray](../../native/INativeObjectArray/) | `ftdnNative_object_array` strings and object-array methods |
| [LibraryApplicationInterface](../../native/LibraryApplicationInterface/) | `pass_managed_library_callback_method_pointers` and `ScriptingInterfaceObjects.SetFunctionPointer` |
| [EngineMethod](../../native/EngineMethod/) | Mapping between `[EngineMethod]` names and native registration/callback tables |

## Useful Investigation Anchors

| Clue | Example source locations | Use |
|------|--------------------------|-----|
| `/nativeTest` | `TaleWorlds.Native.dll.c:88571`, `324126` | Startup argument or native test-path analysis |
| `Unable to find native module. Skipping asset preload` | `TaleWorlds.Native.dll.c:136632` | Native module asset preload failures |
| `../../Modules/Native/splash.bmp` | `TaleWorlds.Native.dll.c:316205` | Native module asset path |
| `Modules/Native/get_tileset.bat` | `TaleWorlds.Native.dll.c:319297`, `319389` | Missing or outdated core tileset messages |

## Analysis Notes

- Export symbols and ordinal clues come from decompiler comments; verify the export table with a PE tool when precision matters.
- Vftable names are strong type-location clues, but object layouts in decompiled code still require manual confirmation.
- Managed interface names are more stable than native addresses. Prefer managed APIs when implementing mods.
- Addresses and line numbers apply only to the current v1.3.15 decompiled sample.

## Usage Example

```csharp
// Example: check native export signatures before using P/Invoke.
```
