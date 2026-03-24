---
title: INativeArray 接口
description: 原生数组操作接口文档 / Documentation for native array operations interface
---

# INativeArray

**文件**: `TaleWorlds.DotNet/INativeArray.cs`  
**命名空间**: `TaleWorlds.DotNet`  
**特性**: `[LibraryInterfaceBase]`

`INativeArray` 接口提供了对原生 C++ 数组的操作方法。通过 `[EngineMethod]` 特性映射到原生函数。

`INativeArray` interface provides operations for native C++ arrays. Methods are mapped to native functions via `[EngineMethod]` attribute.

## 接口定义 / Interface Definition

```csharp
[LibraryInterfaceBase]
internal interface INativeArray
{
    [EngineMethod("get_data_pointer_offset", false, null, false)]
    int GetDataPointerOffset();

    [EngineMethod("create", false, null, false)]
    NativeArray Create();

    [EngineMethod("get_data_size", false, null, false)]
    int GetDataSize(UIntPtr pointer);

    [EngineMethod("get_data_pointer", false, null, false)]
    UIntPtr GetDataPointer(UIntPtr pointer);

    [EngineMethod("add_integer_element", false, null, false)]
    void AddIntegerElement(UIntPtr pointer, int value);

    [EngineMethod("add_float_element", false, null, false)]
    void AddFloatElement(UIntPtr pointer, float value);

    [EngineMethod("add_element", false, null, false)]
    void AddElement(UIntPtr pointer, IntPtr element, int elementSize);

    [EngineMethod("clear", false, null, false)]
    void Clear(UIntPtr pointer);
}
```

---

## 方法列表 / Methods

| 方法 | 签名 | 用途 |
|------|------|------|
| GetDataPointerOffset | `int GetDataPointerOffset()` | 获取数据指针偏移量 |
| Create | `NativeArray Create()` | 创建新的原生数组 |
| GetDataSize | `int GetDataSize(UIntPtr pointer)` | 获取数组数据大小（字节） |
| GetDataPointer | `UIntPtr GetDataPointer(UIntPtr pointer)` | 获取数据指针 |
| AddIntegerElement | `void AddIntegerElement(UIntPtr, int)` | 添加 int 元素 |
| AddFloatElement | `void AddFloatElement(UIntPtr, float)` | 添加 float 元素 |
| AddElement | `void AddElement(UIntPtr, IntPtr, int)` | 添加任意类型元素 |
| Clear | `void Clear(UIntPtr pointer)` | 清空数组 |

---

## 使用示例 / Usage Examples

### 基本数组操作 / Basic Array Operations

```csharp
// 创建原生数组
NativeArray array = NativeArray.Create();

// 添加元素 - 支持多种类型
array.AddElement(42);           // int
array.AddElement(3.14f);         // float
array.AddElement(new Vec3());    // struct

// 获取数组长度
int length = array.GetLength<int>();

// 转换为托管数组
int[] managedArray = array.ToArray<int>();

// 清空数组
array.Clear();
```

### 泛型数组操作 / Generic Array Operations

```csharp
// 添加自定义结构体
[StructLayout(LayoutKind.Sequential)]
public struct MyStruct
{
    public int Id;
    public float Value;
}

NativeArray array = NativeArray.Create();
MyStruct myData = new MyStruct { Id = 1, Value = 2.5f };
array.AddElement(myData);

// 读取元素
MyStruct readData = array.GetElementAt<MyStruct>(0);
```

### 遍历数组 / Iterating Array

```csharp
NativeArray array = NativeArray.Create();
array.AddElement(1);
array.AddElement(2);
array.AddElement(3);

// 使用 IEnumerable 遍历
foreach (int value in array)
{
    Console.WriteLine(value);
}

// 或转换为数组后使用
int[] arr = array.ToArray<int>();
for (int i = 0; i < arr.Length; i++)
{
    Console.WriteLine($"[{i}] = {arr[i]}");
}
```

---

## NativeArray 包装类 / NativeArray Wrapper Class

`NativeArray` 是 `INativeArray` 的用户友好包装器：

```csharp
[EngineClass("ftdnNative_array")]
public sealed class NativeArray : NativeObject
{
    public static NativeArray Create();
    
    public int DataSize { get; }
    
    public int GetLength<T>() where T : struct;
    public T GetElementAt<T>(int index) where T : struct;
    public IEnumerable<T> GetEnumerator<T>() where T : struct;
    public T[] ToArray<T>() where T : struct;
    
    public void AddElement(int value);
    public void AddElement(float value);
    public void AddElement<T>(T value) where T : struct;
    public void Clear();
}
```

---

## 内存布局 / Memory Layout

```
NativeArray 对象
    ↓ Pointer (UIntPtr)
原生内存块
    ↓
[Size][Data Pointer]
    ↓
[Element 0][Element 1][Element 2]...
```

- `Size`: 4字节，元素数量
- `Data Pointer`: 8字节，指向实际数据缓冲区
- 数据缓冲区: 连续内存，每个元素大小相同

---

## 注意事项 / Important Notes

1. **类型安全** - `GetLength<T>` 和 `GetElementAt<T>` 使用泛型确保类型安全
2. **Marshal overhead** - `AddElement<T>` 使用 `Marshal.StructureToPtr` 有性能开销
3. **静态缓冲区** - 内部使用 16KB 静态缓冲区 `_temporaryData`
4. **引用语义** - `NativeArray` 继承自 `NativeObject`，自动管理引用计数

---

## 相关文件 / Related Files

| 文件 | 说明 |
|------|------|
| `NativeObject.cs` | 基类 |
| `NativeArray.cs` | 包装类实现 |
| `INativeObjectArray.cs` | 对象数组接口 |
| `INativeString.cs` | 字符串接口 |
