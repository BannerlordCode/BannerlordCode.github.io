---
title: 故障排除 / Troubleshooting
description: 常见问题诊断和解决方案 / Common problem diagnosis and solutions
---

# 故障排除 / Troubleshooting

## 概述 / Overview

本指南帮助你诊断和解决 Bannerlord modding 中常见的问题。

This guide helps you diagnose and solve common issues in Bannerlord modding.

## 目录 / Contents

1. [模块问题](#模块问题)
2. [游戏崩溃](#游戏崩溃)
3. [XML 问题](#xml-问题)
4. [存档问题](#存档问题)
5. [性能问题](#性能问题)

---

## 模块问题

### 模块不显示在列表中

**症状**: 模块没有出现在游戏的 Modules 列表中

**检查项**:
1. `SubModule.xml` 文件是否存在且位置正确
2. XML 语法是否正确（使用 XML 验证工具）
3. DLL 是否已编译并位于正确位置
4. 类名是否与 XML 中的 `SubModuleClassType` 匹配

```xml
<!-- 正确的结构 -->
<Module>
  <SubModules>
    <SubModule>
      <DLLName>MyModule.dll</DLLName>
      <SubModuleClassType>MyNamespace.MySubModule</SubModuleClassType>
    </SubModule>
  </SubModules>
</Module>
```

### 模块加载失败

**症状**: 游戏启动时模块加载失败

**检查项**:
1. 查看 `rgl_log.txt` 获取详细错误信息
2. 检查依赖模块是否已加载
3. 确认 .NET Framework 版本兼容

---

## 游戏崩溃

### 常见崩溃原因

| 原因 | 症状 | 解决方案 |
|------|------|----------|
| 空引用 | 某操作后立即崩溃 | 添加 null 检查 |
| 数组越界 | 访问集合时崩溃 | 检查索引边界 |
| 类型转换 | 强制转换时崩溃 | 使用 `as` 操作符 |
| 死循环 | 游戏无响应后崩溃 | 审查循环逻辑 |

### 调试方法

```csharp
// 添加日志
Debug.Print("Before critical operation");
try
{
    // 可能崩溃的代码
    SomeOperation();
}
catch (Exception ex)
{
    Debug.Print($"Error: {ex.Message}");
}
Debug.Print("After critical operation");
```

---

## XML 问题

### XML 解析错误

**症状**: 游戏无法解析 XML 文件

**解决方案**:
1. 使用 XML 验证工具检查语法
2. 确保所有标签正确闭合
3. 检查特殊字符转义

```xml
<!-- 错误示例 -->
<Items>
  <Item name="My Item">  <!-- 空格可能有问题 -->
</Items>

<!-- 正确示例 -->
<Items>
  <Item name="My_Item" />
</Items>
```

### 资源路径问题

**症状**: 资源加载失败

**检查项**:
1. 路径大小写是否匹配
2. 资源文件是否在正确位置
3. SubModule.xml 中是否正确引用

---

## 存档问题

### 存档损坏

**症状**: 无法加载存档

**原因**:
1. 存档格式版本不匹配
2. 自定义数据类型未正确序列化
3. 游戏更新后存档格式变化

**解决方案**:
```csharp
// 在 SyncData 中添加版本处理
public override void SyncData(IDataStore dataStore)
{
    int version = 1;
    dataStore.SyncData("Version", ref version);
    
    if (version == 1)
    {
        // 加载旧格式
    }
    else if (version == 2)
    {
        // 加载新格式
    }
}
```

### 存档不保存自定义数据

**检查项**:
1. 数据类是否标记为 `[SaveableClass]`
2. 字段是否标记为 `[SaveableField]`
3. CampaignBehavior 是否正确实现 `SyncData`

---

## 性能问题

### 卡顿

**原因**:
1. 每帧创建新对象
2. 大量计算在主线程
3. 频繁的垃圾回收

**解决方案**:
```csharp
// 缓存对象，避免每帧创建
private List<Agent> _cachedAgents = new List<Agent>();

public override void OnMissionTick(float dt)
{
    _cachedAgents.Clear();
    // 填充缓存
}
```

### 内存泄漏

**症状**: 内存使用持续增长

**检查项**:
1. 事件监听器是否正确注销
2. 是否有对象未被释放
3. 缓存是否无限增长

```csharp
public override void OnMissionFinish(bool isHeroParty)
{
    base.OnMissionFinish(isHeroParty);
    
    // 清理
    CampaignEvents.OnGameLoaded.RemoveListener(this);
}
```

---

## 日志位置 / Log Locations

| 日志 | 位置 |
|------|------|
| 游戏日志 | `Documents\Mount & Blade II Bannerlord\logs\rgl_log.txt` |
| 错误日志 | `Documents\Mount & Blade II Bannerlord\logs\error_log.txt` |

---

## 相关文档 / Related Documentation

- [调试技巧](./index.md#调试技巧)
- [存档系统](./save-system-guide.md)
- [常见模式](./common-patterns.md)

---

## 下一节 / Next Section

- [常见模式](./common-patterns.md) - 最佳实践
- [入门指南](./index.md) - 返回主指南
