---
title: INativeString Interface
description: Documentation for native string operations interface
---

# INativeString

**File**: `TaleWorlds.DotNet/INativeString.cs`  
**Namespace**: `TaleWorlds.DotNet`  
**Attribute**: `[LibraryInterfaceBase]`

`INativeString` interface provides operations for native C++ string handling.

## Interface Definition

```csharp
[LibraryInterfaceBase]
internal interface INativeString
{
    [EngineMethod("create", false, null, false)]
    NativeString Create();

    [EngineMethod("get_string", false, null, false)]
    string GetString(NativeString nativeString);

    [EngineMethod("set_string", false, null, false)]
    void SetString(NativeString nativeString, string newString);
}
```

---

## Methods

| Method | Signature | Purpose |
|--------|-----------|---------|
| Create | `NativeString Create()` | Create new native string |
| GetString | `string GetString(NativeString)` | Get string content |
| SetString | `void SetString(NativeString, string)` | Set string content |

---

## Usage Examples

### Basic String Operations

```csharp
// Create native string
NativeString str = NativeString.Create();

// Set string content
str.SetString("Hello, Bannerlord!");

// Get string content
string content = str.GetString();
Console.WriteLine(content);  // Outputs: Hello, Bannerlord!

// Modify string
str.SetString("New string content");
```

### Practical Use Cases

```csharp
// Display text in-game
NativeString displayText = NativeString.Create();
displayText.SetString("Quest Updated!");
// May pass to native UI system for display

// Handle user input
string userInput = GetUserInput();
NativeString nativeInput = NativeString.Create();
nativeInput.SetString(userInput);
// Pass to native code for processing
```

---

## NativeString Wrapper Class

`NativeString` is the user-friendly wrapper for `INativeString`:

```csharp
[EngineClass("ftdnNative_string")]
public sealed class NativeString : NativeObject
{
    internal NativeString(UIntPtr pointer) : base()
    {
        Construct(pointer);
    }
    
    public static NativeString Create();
    public string GetString();
    public void SetString(string newString);
}
```

---

## INativeStringHelper - Thread-Local String

Besides `INativeString`, there's also `INativeStringHelper` for thread-local string operations:

```csharp
[LibraryInterfaceBase]
internal interface INativeStringHelper
{
    [EngineMethod("create_rglVarString", false, null, false)]
    UIntPtr CreateRglVarString(string text);

    [EngineMethod("get_thread_local_cached_rglVarString", false, null, false)]
    UIntPtr GetThreadLocalCachedRglVarString();

    [EngineMethod("set_rglVarString", false, null, false)]
    void SetRglVarString(UIntPtr pointer, string text);

    [EngineMethod("delete_rglVarString", false, null, false)]
    void DeleteRglVarString(UIntPtr pointer);
}
```

---

## Important Notes

1. **Encoding** - Native string uses UTF-8 or system default encoding
2. **Memory management** - `NativeString` inherits from `NativeObject`, auto-manages reference
3. **Thread safety** - `INativeStringHelper` provides thread-local cached version
4. **Do not manually release** - Use `ManualInvalidate()` to release reference

---

## Related Files

| File | Description |
|------|-------------|
| `NativeString.cs` | Wrapper class implementation |
| `INativeStringHelper.cs` | Thread-local string interface |
| `NativeObject.cs` | Base class |
