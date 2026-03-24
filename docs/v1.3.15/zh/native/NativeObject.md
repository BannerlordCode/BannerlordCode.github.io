---
title: NativeObject 文档
description: 原生对象包装类完整文档 / Complete documentation for native object wrapper class
---

# NativeObject

**文件**: `TaleWorlds.DotNet/NativeObject.cs`  
**命名空间**: `TaleWorlds.DotNet`  
**继承**: 无基类 / Base class for all native object wrappers

`NativeObject` 是所有原生 C++ 对象包装器的抽象基类。它封装了原生指针并管理引用计数。

`NativeObject` is the abstract base class for all native C++ object wrappers. It encapsulates native pointers and manages reference counting.

## 类定义 / Class Definition

```csharp
public abstract class NativeObject
{
    public UIntPtr Pointer { get; private set; }
    
    internal void Construct(UIntPtr pointer);
    ~NativeObject();
    public void ManualInvalidate();
    
    public static NativeObject CreateNativeObjectWrapper(NativeObjectPointer nativeObjectPointer);
    public static T CreateNativeObjectWrapper<T>(NativeObjectPointer nativeObjectPointer) where T : NativeObject;
}
```

---

## 关键方法 / Key Methods

### Construct

```csharp
internal void Construct(UIntPtr pointer)
```

**Purpose**: 初始化 NativeObject，设置指针并增加引用计数  
**Purpose**: Initialize the NativeObject, set pointer and increment reference count

**内部逻辑**:
1. 设置 `this.Pointer = pointer`
2. 调用 `IManaged.IncreaseReferenceCount(this.Pointer)` 增加引用
3. 创建 `GCHandle` 防止 GC 立即回收
4. 添加到 `_nativeObjectKeepReferences` 列表，10帧后释放强引用

### ~NativeObject (Finalizer)

```csharp
~NativeObject()
```

**Purpose**: 析构函数自动减少引用计数  
**Purpose**: Finalizer automatically decrements reference count

**重要**: 如果对象未被手动销毁（`ManualInvalidate`），finalizer 会在 GC 时自动调用 `DecreaseReferenceCount`

### ManualInvalidate

```csharp
public void ManualInvalidate()
```

**Purpose**: 主动销毁对象，减少引用计数  
**Purpose**: Actively destroy object, decrement reference count

**使用场景**: 当你确定不再需要该对象时调用，之后不应再访问该对象

### CreateNativeObjectWrapper

```csharp
internal static NativeObject CreateNativeObjectWrapper(NativeObjectPointer nativeObjectPointer)
internal static T CreateNativeObjectWrapper<T>(NativeObjectPointer nativeObjectPointer) where T : NativeObject
```

**Purpose**: 根据原生指针创建对应的包装器对象  
**Purpose**: Create wrapper object from native pointer

---

## 属性 / Properties

| 属性 | 类型 | 说明 |
|------|------|------|
| Pointer | `UIntPtr` | 原生对象的内存地址 |

---

## 内存管理 / Memory Management

### 引用计数流程 / Reference Counting Flow

```
NativeObject 构造
    ↓
IManaged.IncreaseReferenceCount(ptr)  ← 原生引用计数+1
    ↓
GCHandle.Alloc(this)  ← 防止立即GC
    ↓
10帧后释放GCHandle  ← 允许GC回收
    ↓
GC回收（如果无引用） → Finalizer调用 → DecreaseReferenceCount(ptr)
```

### NativeObjectKeeper 内部类 / Internal NativeObjectKeeper Class

```csharp
private class NativeObjectKeeper
{
    internal int TimerToReleaseStrongRef;  // 倒计时，10帧
    internal GCHandle gcHandle;            // 强引用句柄
}
```

**作用**: 确保对象在一定帧数内不会被 GC 回收，给予原生端足够的处理时间

### 内存管理总结 / Memory Management Summary

| 阶段 | 操作 |
|------|------|
| 构造 | 原生分配对象 → 增加引用计数 → 创建GCHandle |
| 使用中 | 引用计数保持 > 0 |
| 10帧后 | 释放GCHandle，允许GC |
| GC时 | 如果无引用 → Finalizer → 减少引用计数 |
| 主动销毁 | 调用 `ManualInvalidate()` → 立即减少引用 |

---

## 使用示例 / Usage Examples

### 基本使用 / Basic Usage

```csharp
// NativeObject 是抽象类，不能直接实例化
// 原生代码通过 NativeObjectPointer 传递指针
// 系统自动创建对应的子类实例

public class MyNativeWrapper : NativeObject
{
    internal MyNativeWrapper(UIntPtr ptr) : base()
    {
        Construct(ptr);
    }
}

// 获取包装器
MyNativeWrapper wrapper = NativeObject.CreateNativeObjectWrapper<MyNativeWrapper>(pointer);
```

### 引用比较 / Reference Comparison

```csharp
// Pointer 属性是 UIntPtr 类型
UIntPtr ptr1 = wrapper1.Pointer;
UIntPtr ptr2 = wrapper2.Pointer;

bool sameNativeObject = (ptr1 == ptr2);

// NativeObject 重写了 Equals 和 == 操作符
bool areEqual = wrapper1 == wrapper2;  // 比较指针和类型
```

### 主动释放 / Manual Invalidation

```csharp
public void Cleanup()
{
    // 主动释放引用
    myNativeObject.ManualInvalidate();
    myNativeObject = null;  // 建议设置为 null
}
```

---

## 注意事项 / Important Notes

1. **永远不要直接访问 Pointer** - 除非你明确知道自己在做什么
2. **不要重复调用 ManualInvalidate** - 会导致引用计数变为负数
3. **指针为零检查** - 使用 `Pointer != UIntPtr.Zero` 检查
4. **线程安全** - 静态字段 `_nativeObjectKeepReferences` 使用 lock 保护

---

## 相关文件 / Related Files

| 文件 | 说明 |
|------|------|
| `IManaged.cs` | 引用计数管理接口 |
| `NativeArray.cs` | 原生数组包装器 |
| `NativeString.cs` | 原生字符串包装器 |
| `NativeObjectArray.cs` | 原生对象数组包装器 |
| `EngineClassTypeDefinition.cs` | 类型定义结构体 |
