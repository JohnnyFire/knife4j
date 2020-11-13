/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.knife4j.aggre.core.pojo;

/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/11/13 13:14
 * @since:knife4j 1.0
 */
public class OpenApiRoute {

    /**
     * 服务名称
     */
    private String name;
    /**
     * 地址，例如：http://192.179.0.1:8999
     */
    private String uri;

    /**
     * openapi路径，例如：/v2/api-docs?group=default
     */
    private String location;

    /**
     * OpenAPI版本，2.0 or 3.0
     */
    private String swaggerVersion="2.0";

    /**
     * 每个微服务下接口的basePath前缀
     */
    private String basePath;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSwaggerVersion() {
        return swaggerVersion;
    }

    public void setSwaggerVersion(String swaggerVersion) {
        this.swaggerVersion = swaggerVersion;
    }

    public String getBasePath() {
        return basePath;
    }

    public void setBasePath(String basePath) {
        this.basePath = basePath;
    }

    @Override
    public String toString() {
        return "OpenApiRoute{" +
                "name='" + name + '\'' +
                ", uri='" + uri + '\'' +
                ", location='" + location + '\'' +
                ", swaggerVersion='" + swaggerVersion + '\'' +
                ", basePath='" + basePath + '\'' +
                '}';
    }
}
