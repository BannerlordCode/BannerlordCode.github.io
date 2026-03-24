---
title: INativeString 接口
description: 原生字符串操作接口文档 / Documentation for native string operations interface
---

# INativeString

**文件**: `TaleWorlds.DotNet/INativeString.cs`  
**命名空间**: `TaleWorlds.DotNet`  
**特性**: `[LibraryInterfaceBase]`

`INativeString` 接口提供了对原生 C++ 字符串的操作方法。

`INativeString` interface provides operations for native C++ string handling.

## 接口定义 / Interface Definition

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

## 方法列表 / Methods

| 方法 | 签名 | 用途 |
|------|------|------|
| Create | `NativeString Create()` | 创建新的原生字符串 |
| GetString | `string GetString(NativeString)` | 获取字符串内容 |
| SetString | `void SetString(NativeString, string)` | 设置字符串内容 |

---

## 使用示例 / Usage Examples

### 基本字符串操作 / Basic String Operations

```csharp
// 创建原生字符串
NativeString str = NativeString.Create();

// 设置字符串内容
str.SetString("Hello, Bannerlord!");

// 获取字符串内容
string content = str.GetString();
Console.WriteLine(content);  // 输出: Hello, Bannerlord!

// 修改字符串
str.SetString("New string content");
```

### 实际使用场景 / Practical Use Cases

```csharp
// 游戏内显示文本
NativeString displayText = NativeString.Create();
displayText.SetString("Quest Updated!");
// 可能传递给原生UI系统显示

// 处理用户输入
string userInput = GetUserInput();
NativeString nativeInput = NativeString.Create();
nativeInput.SetString(userInput);
// 传递给原生代码处理
```

---

## NativeString 包装类 / NativeString Wrapper Class

`NativeString` 是 `INativeString` 的用户友好包装器：

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

## INativeStringHelper - 线程本地字符串 / Thread-Local String

除了 `INativeString`，还有 `INativeStringHelper` 用于线程本地的字符串操作：

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

## 注意事项 / Important Notes

1. **编码** - 原生字符串使用 UTF-8 或系统默认编码
2. **内存管理** - `NativeString` 继承自 `NativeObject`，自动管理引用
3. **线程安全** - `INaniveStringHelper` 提供线程本地缓存版本
4. **不要手动释放** - 使用 `ManualInvalidate()` 释放引用

---

## 相关文件 / Related Files

| 文件 | 说明 |
|------|------|
| `NativeString.cs` | 包装类实现 |
| `INativeStringHelper.cs` | 线程本地字符串接口 |
| `NativeObject.cs` | 基类 |
