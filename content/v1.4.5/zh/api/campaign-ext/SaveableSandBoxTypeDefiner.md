---
title: "SaveableSandBoxTypeDefiner"
description: "v1.4.5 SandBox 的存档定义模块，保留稳定 base ID，但当前没有额外类型注册。"
---
# SaveableSandBoxTypeDefiner

**命名空间:** `SandBox`  
**模块:** `SandBox`  
**类型:** `public class SaveableSandBoxTypeDefiner : SaveableTypeDefiner`  
**源码:** `Modules.SandBox/SandBox/Sandbox/SaveableSandBoxTypeDefiner.cs`

## 职责

`SaveableSandBoxTypeDefiner` 是 SandBox 模块接入全局存档定义上下文的扩展点。v1.4.5 的构造函数保留存档 base ID `33231`，而且本类覆盖的每个定义 hook 都为空：没有新增 class、struct、enum、interface、generic 或 container 定义。因此它当前的行为是以空注册集参与定义阶段，而不是隐藏着一份 SandBox 存档类清单。

## 心智模型：定义提供者，不是存档 manager

存档系统会在遍历对象图前先建立定义：

```text
SandBoxSubModule.OnNewModuleLoad
  -> SaveManager.InitializeGlobalDefinitionContext()
  -> 扫描已加载的 SaveableTypeDefiner
  -> 初始化每个 definer
  -> 调用定义 hook
  -> Save/Load 解析稳定的类型 ID
```

本类通过 [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner) 参与这个阶段。它不拥有 `SyncData` key，不读存档文件，也不决定存档兼容性。

## 源码定义的表面

```csharp
public SaveableSandBoxTypeDefiner() : base(33231)
{
}

protected override void DefineClassTypes() { }
protected override void DefineStructTypes() { }
protected override void DefineEnumTypes() { }
protected override void DefineInterfaceTypes() { }
protected override void DefineGenericClassDefinitions() { }
protected override void DefineGenericStructDefinitions() { }
protected override void DefineContainerDefinitions() { }
```

空 override 是有意义的事实：v1.4.5 没有本类负责的额外类型注册。不能为了让页面看起来完整而根据类名猜一份类型清单。

## Base ID 与兼容性

基类在创建类型定义时会把 definer 的 base ID 与局部 ID 合并。因此 `33231` 属于 SandBox 的存档协议。mod 不应复用或修改它，也不应把不相关的定义塞进这个类。mod 自己的 `SaveableTypeDefiner` 应使用唯一且稳定的 base 范围，并在存档可能包含该类型后保留每个局部 ID。

全局上下文由 `SaveManager.InitializeGlobalDefinitionContext()` 重建，`SandBoxSubModule.OnNewModuleLoad` 会调用它。这个初始化不是迁移机制：发布后修改 ID 可能让旧对象图解析到其他类型，或直接加载失败。

## 依赖与边界

- [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner) 提供受保护的定义 API，并负责把 base ID 与局部 ID 合并。
- [SaveManager](../../save-system/SaveManager) 在建立全局定义上下文时发现本 definer。
- [SandBoxSubModule](../SandBoxSubModule) 在模块加载边界触发这个上下文初始化。

## 宿主中的真实路径

相关源码路径只有一个宿主调用，并不是业务层主动构造对象：

```csharp
protected override void OnNewModuleLoad()
{
    SaveManager.InitializeGlobalDefinitionContext();
}
```

存档系统在填充全局上下文时发现具体 definer。不要在 campaign behavior 中实例化 `SaveableSandBoxTypeDefiner` 来“注册”它；那样绕过上下文生命周期，也不会完成完整的定义扫描。

## 应该使用什么

- campaign behavior 的标量或稳定对象状态应实现 `SyncData(IDataStore)`，并保持 key 与值类型稳定。
- 新的可达对象类型应使用 mod 自己的 `SaveableTypeDefiner`，在选定唯一 ID 范围后调用基类的受保护定义 API。
- 读档准入、模块比较、损坏存档提示和 `LoadResult` 使用 [SandBoxSaveHelper](../SandBoxSaveHelper)。
- 实际的存档/加载遍历与 driver 交接阅读 [SaveManager](../../save-system/SaveManager)。

## 风险与存档边界

- attribute 或空 definer 不会让任意对象图自动可序列化。存档系统要求的每个可达自定义类型和容器都需要有效定义。
- base ID 与局部 ID 是持久化协议标识。发布后的 mod 不应使用自动递增或重复 ID。
- 定义必须在存档遍历前完成。在晚期战役回调中再添加定义，可能产生与当前存档操作不匹配的上下文。
- 本类没有战役状态，不应存储配置、运行时句柄、任务、Agent、delegate 或 UI view model。

## 版本说明

空 hook 集合和 `33231` 是 v1.4.5 事实。未来 SandBox 可能增加注册或改变 ID 分配，依赖当前 no-op 行为前请重新阅读源码。

## 导航

- 父级：[Campaign extension API](../)
- 兄弟页：[SandBoxSaveManager](../SandBoxSaveManager) · [SandBoxSaveHelper](../SandBoxSaveHelper) · [SandBoxSubModule](../SandBoxSubModule)
- 相关：[SaveableTypeDefiner](../../save-system/SaveableTypeDefiner) · [SaveManager](../../save-system/SaveManager) · [IDataStore](../../campaign/IDataStore) · [LoadResult](../../save-system/LoadResult)
- English: [SaveableSandBoxTypeDefiner](../../../../en/api/campaign-ext/SaveableSandBoxTypeDefiner)
