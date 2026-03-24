---
title: INativeObjectArray 接口
description: 原生对象数组操作接口文档 / Documentation for native object array interface
---

# INativeObjectArray

**文件**: `TaleWorlds.DotNet/INativeObjectArray.cs`  
**命名空间**: `TaleWorlds.DotNet`  
**特性**: `[LibraryInterfaceBase]`

`INativeObjectArray` 接口提供了对原生对象数组的操作方法。数组元素是 `NativeObject` 指针。

`INativeObjectArray` interface provides operations for native arrays of objects. Array elements are `NativeObject` pointers.

## 接口定义 / Interface Definition

```csharp
[LibraryInterfaceBase]
internal interface INativeObjectArray
{
    [EngineMethod("create", false, null, false)]
    NativeObjectArray Create();

    [EngineMethod("get_count", false, null, false)]
    int GetCount(UIntPtr pointer);

    [EngineMethod("add_element", false, null, false)]
    void AddElement(UIntPtr pointer, UIntPtr nativeObject);

    [EngineMethod("get_element_at_index", false, null, false)]
    NativeObject GetElementAtIndex(UIntPtr pointer, int index);

    [EngineMethod("clear", false, null, false)]
    void Clear(UIntPtr pointer);
}
```

---

## 方法列表 / Methods

| 方法 | 签名 | 用途 |
|------|------|------|
| Create | `NativeObjectArray Create()` | 创建新的对象数组 |
| GetCount | `int GetCount(UIntPtr pointer)` | 获取元素数量 |
| AddElement | `void AddElement(UIntPtr, UIntPtr)` | 添加 NativeObject |
| GetElementAtIndex | `NativeObject GetElementAtIndex(UIntPtr, int)` | 获取指定索引元素 |
| Clear | `void Clear(UIntPtr pointer)` | 清空数组 |

---

## 使用示例 / Usage Examples

### 基本对象数组操作 / Basic Object Array Operations

```csharp
// 创建原生对象数组
NativeObjectArray array = NativeObjectArray.Create();

// 添加强制转换后的 NativeObject
Mission mission = Mission.Current;
if (mission != null)
{
    array.AddElement(mission);  // Mission 继承自 NativeObject
}

// 获取元素数量
int count = array.Count;

// 获取指定索引元素
NativeObject obj = array.GetElementAt(0);

// 遍历数组
foreach (NativeObject item in array)
{
    // 处理 item
}

// 清空数组
array.Clear();
```

### 处理自定义 NativeObject 子类 / Handling Custom NativeObject Subclasses

```csharp
// 假设 YourCustomObject 继承自 NativeObject
NativeObjectArray customArray = NativeObjectArray.Create();

YourCustomObject obj1 = new YourCustomObject();
YourCustomObject obj2 = new YourCustomObject();

customArray.AddElement(obj1);
customArray.AddElement(obj2);

// 注意: GetElementAt 返回的是基类 NativeObject
NativeObject baseObj = customArray.GetElementAt(0);

// 如果需要具体类型，需要强制转换
YourCustomObject typedObj = (YourCustomObject)customArray.GetElementAt(0);
```

---

## NativeObjectArray 包装类 / NativeObjectArray Wrapper Class

`NativeObjectArray` 是 `INativeObjectArray` 的用户友好包装器，实现 `IEnumerable<NativeObject>`：

```csharp
[EngineClass("ftdnNative_object_array")]
public sealed class NativeObjectArray : NativeObject, IEnumerable<NativeObject>, IEnumerable
{
    internal NativeObjectArray(UIntPtr pointer) : base()
    {
        Construct(pointer);
    }
    
    public static NativeObjectArray Create();
    
    public int Count { get; }
    
    public NativeObject GetElementAt(int index);
    public void AddElement(NativeObject nativeObject);
    public void Clear();
    
    // 实现 IEnumerable<NativeObject>
    IEnumerator<NativeObject> IEnumerable<NativeObject>.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator();
}
```

---

## 与 INativeArray 的区别 / Difference from INativeArray

| 特性 | INativeArray | INativeObjectArray |
|------|--------------|-------------------|
| 元素类型 | 原始类型 (int, float, struct) | NativeObject 指针 |
| 泛型支持 | 是 (`NativeArray`) | 否 |
| 元素获取 | `GetElementAt(index)` | `GetElementAt(index)` |
| 添加方式 | `AddElement(value)` | `AddElement(nativeObject)` |

---

## 注意事项 / Important Notes

1. **类型擦除** - `NativeObjectArray` 不保留具体类型信息
2. **引用管理** - 添加元素不会复制对象，只是增加引用计数
3. **枚举器** - 实现 `IEnumerable`，可以使用 foreach
4. **空元素** - `AddElement(null)` 会添加空指针 `UIntPtr.Zero`

---

## 相关文件 / Related Files

| 文件 | 说明 |
|------|------|
| `NativeObjectArray.cs` | 包装类实现 |
| `NativeObject.cs` | 基类 |
| `INativeArray.cs` | 原始类型数组接口 |
| `INativeString.cs` | 字符串接口 |
