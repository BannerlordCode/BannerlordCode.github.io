---
title: NativeObject
description: NativeObject - 引擎原生对象的托管包装基类，管理原生指针与引用计?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeObject`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeObject
**命名空间:** TaleWorlds.DotNet
**模块:** TaleWorlds.DotNet
**类型:** abstract class

## 概述
`NativeObject

` 是所?引擎原生对象"在托管侧（C#）的基类。引擎底层用 C++ 实现游戏对象（场景、实体、网格、材质等），C# 侧通过 

`NativeObject

` 持有一?

`UIntPtr Pointer

`（原生指针）来访问与操作这些对象。`NativeObject

` 提供引用计数管理：`Construct

` 创建时增加引擎侧引用计数，`ManualInvalidate

` 显式释放；`Finalize

`（析构）会自动调用释放逻辑防止内存泄漏?
引擎使用"指针缓存?（`_objectByPointer

`）做双向映射：给定原生指针能 O(1) 找到对应 

`NativeObject

`，给?

`NativeObject

` 能取回指针。`CheckPointer

` 确保指针有效，`Construct

` 后指针缓存到表中。`[EngineObject]

` 标记的子类由引擎自动管理生命周期；手?

`new

` 的子类需自行管理?
## 心智模型
?

`NativeObject

` 看作"C# 对象 ?C++ 对象的代?。`Pointer

` 就是 C++ 对象的内存地址。引擎通过 P/Invoke 调用 C++ 方法时传入这个指针。引用计数防?C# ?GC 回收?C++ 对象仍在使用：`Construct

` 加引用，

`ManualInvalidate

` 减引用。`Finalize

` 作为安全网，?GC 回收时自动释放未手动释放的对象?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`Pointer

` \| 

`UIntPtr

` \| 原生 C++ 对象指针（只读，

`virtual

`?\|

## 主要方法
### Construct
`

`

`csharp
protected virtual void Construct()
`

`

`
在子类构造中调用：注册到指针缓存表，增加引擎侧引用计数?
### ManualInvalidate
`

`

`csharp
public virtual void ManualInvalidate()
`

`

`
显式释放：从缓存表移除，减少引用计数，置空指针。之后不可再访问?
### CheckPointer
`

`

`csharp
protected void CheckPointer()
`

`

`
断言 

`Pointer != Zero

`，在所有原生方法调用前确保对象未被释放?
### FromPointer (静?
`

`

`csharp
public static T FromPointer&lt;T&gt;(UIntPtr pointer) where T : NativeObject
`

`

`
给定原生指针，从缓存表查找或构造对?

`NativeObject

` 子类实例?
## 使用示例
### 示例: 子类构造原生对?**场景**: 引擎对象子类（如 

`Scene

`）在构造时调用 

`Construct

`
`

`

`csharp
public class MyEngineObject : NativeObject
{
    public MyEngineObject(UIntPtr ptr)
    {
        // 子类构造时通过 SetPointer + Construct 完成注册
        this.SetPointer(ptr);
        this.Construct();
    }
}

// 使用
var obj = NativeObject.FromPointer&lt;MyEngineObject&gt;(nativePtr);
// ... 使用 obj ...
obj.ManualInvalidate(); // 显式释放
// 或等 GC 回收?Finalize 自动释放
`

`

`
**要点**: 

`Pointer

` ?

`virtual

`，允许子类自定义指针来源（如从缓存取）。`FromPointer&lt;T&gt;

` 是工厂方法，先查 

`_objectByPointer

` 缓存，命中则返回缓存实例，未命中?

`new T(ptr)

` 构造新实例。子类不应直?

`set

` 

`Pointer

`（通过内部 

`SetPointer

` 方法）。`ManualInvalidate

` 后再访问会触?

`CheckPointer

` 断言失败。`Finalize

` 使用 

`GCHandle

` 机制确保析构安全?
## 参见
- [完整类目录](../catalog-engine)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
