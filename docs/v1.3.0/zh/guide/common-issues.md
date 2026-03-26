---
title: 常见问题 / Common Issues
description: v1.3.0 常见错误和解决方案 / v1.3.0 common errors and solutions
---

# 常见问题 / Common Issues

**v1.3.0 版本**

## 模块问题

### 模块不加载

检查：
1. `SubModule.xml` 路径是否正确
2. DLL 是否编译
3. 类名是否匹配

### 类找不到

```xml
<!-- 确认类名正确 -->
<SubModuleClassType>MyNamespace.MySubModule</SubModuleClassType>
```

## 存档问题

### 数据不保存

检查：
1. 是否实现了 `SyncData`
2. 变量是否为字段（非属性）
3. 变量类型是否支持

```csharp
// 正确
private int _value;
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("Value", ref _value);
}

// 错误 - 属性不会被保存
public int Value { get; set; }
```

## 版本差异问题

### v1.3.15 升级

v1.3.0 的代码在 v1.3.15 可能需要修改：
1. 存档系统需要重新实现
2. 部分 API 已标记 [Obsolete]

---

## 相关文档 / Related Documentation

- [版本差异](./index.md#版本差异)
- [v1.3.15 故障排除](../../v1.3.15/zh/guide/troubleshooting.md)
